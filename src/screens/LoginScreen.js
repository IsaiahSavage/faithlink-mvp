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
import { FIREBASE_AUTH } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginScreen = ({ navigation }) => {
  /** STATE VARIABLES */
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
      alert('Login failed:' + error.message || 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          label="Email"
          autoComplete="email"
          keyboardType="email-address"
          autoCapitalize="none"
          underlineColor="transparent"
          theme={{ colors: { primary: '#002857' } }}
          returnKeyType="next"
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
          ref={(input) => {
            this.PasswordInput = input;
          }}
          underlineColor="transparent"
          theme={{ colors: { primary: '#002857' } }}
          right={
            <TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)} />
          }
        />
        {loading ? (
          <ActivityIndicator size={'large'} color={'#002857'} />
        ) : (
          <>
            <Button
              mode="contained"
              style={styles.btnContainer}
              buttonColor="#002857"
              labelStyle={styles.loginText}
              dark={true}
              onPress={signIn}
            >
              Login
            </Button>
            <Button
              mode="text"
              style={styles.btnContainer}
              labelStyle={styles.loginText}
              onPress={() => navigation.navigate('Register')}
            >
              Create an Account
            </Button>
          </>
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
  loginText: {
    fontSize: 20,
    width: '100%',
    height: 'auto',
  },
});

export default LoginScreen;
