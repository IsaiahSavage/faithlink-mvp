import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const RegisterScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [hidePassConfirmation, setHidePassConfirmation] = useState(true);
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  // TODO: convert alerts to custom error messages
  const signUp = async () => {
    setLoading(true);
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !passwordConfirmation
    ) {
      alert('Registration failed: Please fill all fields.');
      setLoading(false);
      return;
    }
    if (password !== passwordConfirmation) {
      alert('Registration failed: Passwords do not match');
      setLoading(false);
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const docRef = await addDoc(collection(FIRESTORE_DB, 'users'), {
        first: firstName,
        last: lastName,
        email: email,
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.log(error);
      alert('Registration failed:' + error.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
          label="First Name"
          autoComplete="given-name"
          autoCapitalize="words"
          textContentType="givenName"
          underlineColor="transparent"
          theme={{ colors: { primary: '#002857' } }}
          returnKeyType="next"
          ref={(input) => {
            this.FirstNameInput = input;
          }}
          onSubmitEditing={() => {
            this.LastNameInput.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setLastName(text)}
          value={lastName}
          label="Last Name"
          autoComplete="name"
          autoCapitalize="words"
          underlineColor="transparent"
          textContentType="familyName"
          theme={{ colors: { primary: '#002857' } }}
          returnKeyType="next"
          ref={(input) => {
            this.LastNameInput = input;
          }}
          onSubmitEditing={() => {
            this.EmailInput.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          label="Email"
          autoComplete="email"
          autoCapitalize="none"
          underlineColor="transparent"
          textContentType="emailAddress"
          theme={{ colors: { primary: '#002857' } }}
          returnKeyType="next"
          ref={(input) => {
            this.EmailInput = input;
          }}
          onSubmitEditing={() => {
            this.PasswordInput.focus();
          }}
          blurOnSubmit={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          label="Password"
          value={password}
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry={hidePass ? true : false}
          autoCorrect={false}
          returnKeyType="next"
          ref={(input) => {
            this.PasswordInput = input;
          }}
          onSubmitEditing={() => {
            this.PasswordConfirmationInput.focus();
          }}
          underlineColor="transparent"
          theme={{ colors: { primary: '#002857' } }}
          right={
            <TextInput.Icon
              icon={hidePass ? 'eye' : 'eye-off'}
              onPress={() => setHidePass(!hidePass)}
            />
          }
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPasswordConfirmation(text)}
          label="Confirm Password"
          value={passwordConfirmation}
          autoCapitalize="none"
          textContentType="password"
          secureTextEntry={hidePassConfirmation ? true : false}
          autoCorrect={false}
          ref={(input) => {
            this.PasswordConfirmationInput = input;
          }}
          underlineColor="transparent"
          theme={{ colors: { primary: '#002857' } }}
          right={
            <TextInput.Icon
              icon={hidePassConfirmation ? 'eye' : 'eye-off'}
              onPress={() => setHidePassConfirmation(!hidePassConfirmation)}
            />
          }
        />
        {loading ? (
          <ActivityIndicator size={'large'} color={'#002857'} />
        ) : (
          <Button
            mode="contained"
            buttonColor="#002857"
            style={styles.btnContainer}
            labelStyle={styles.signupText}
            dark={true}
            onPress={signUp}
          >
            Sign Up
          </Button>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#002857',
    fontSize: 30,
    marginTop: 50,
  },
  inputContainer: {
    justifyContent: 'center',
    flex: 2,
  },
  input: {
    fontSize: 20,
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
  signupText: {
    fontSize: 20,
    width: '100%',
    height: 'auto',
  },
});

export default RegisterScreen;
