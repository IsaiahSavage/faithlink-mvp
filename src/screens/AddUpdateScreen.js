import React, { useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { toProperCase } from '../utils/StringUtils';
import { useUserContext } from '../contexts/UserContext';
import { FIRESTORE_DB } from '../../firebase/firebaseConfig';
import { Timestamp, collection, setDoc, doc, getDoc } from 'firebase/firestore';

const AddUpdateScreen = ({ route, navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const { state } = useUserContext();

  /**
   * Submits the form data to create a new resource.
   * @async
   * @function submit
   * @returns {Promise<void>} A promise that resolves when the submission is complete.
   */
  const submit = async () => {
    setLoading(true);
    if (!title || !content) {
      alert('Please fill out all required fields.');
      setLoading(false);
      return;
    }

    try {
      const today = new Date(Date.now());
      const timestamp = Timestamp.fromDate(today);

      const groupDoc = await getDoc(
        doc(FIRESTORE_DB, `groups/${state.userData.groupID}`),
      );

      setDoc(
        groupDoc.ref,
        {
          updates: [
            ...groupDoc.data().updates,
            {
              header: title,
              content: content,
              createdOn: timestamp,
              id: groupDoc.data().updates.length + 1,
              user: doc(FIRESTORE_DB, `users/${state.userID}`),
            },
          ],
        },
        { merge: true },
      )
        .then(() => {
          setLoading(false);
          navigation.goBack();
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      console.log('Error adding update: ', error);
      alert('Error adding update: ' + error.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <Text style={styles.title}>Add Update</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.required]}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            autoCapitalize="words"
            enablesReturnKeyAutomatically={true}
            maxLength={100}
            theme={{ colors: { primary: '#002857' } }}
          />
          <TextInput
            style={[styles.input, styles.required]}
            placeholder="Content"
            value={content}
            onChangeText={setContent}
            enablesReturnKeyAutomatically={true}
            maxLength={5000}
            numberOfLines={4}
            multiline={true}
            theme={{ colors: { primary: '#002857' } }}
          />
          {loading ? (
            <ActivityIndicator size={'large'} color={'#002857'} />
          ) : (
            <Button
              mode="contained"
              buttonColor="#002857"
              style={styles.btnContainer}
              labelStyle={styles.submitText}
              dark={true}
              onPress={submit}
            >
              Create
            </Button>
          )}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default AddUpdateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#002857',
    fontSize: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    justifyContent: 'center',
  },
  input: {
    fontSize: 15,
    minWidth: 300,
    marginBottom: 20,
    backgroundColor: '#E8E8E8',
  },
  btnContainer: {
    alignSelf: 'center',
    width: '80%',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 20,
  },
  submitText: {
    fontSize: 20,
    width: '100%',
    height: 'auto',
  },
  required: {
    fontWeight: 'bold',
  },
});
