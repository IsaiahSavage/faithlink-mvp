import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const navigation = useNavigation();

  // TODO: add Firebase authentication
  const handleLogin = () => {
    navigation.navigate('Home');
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
          onChangeText={setUsername}
          value={username}
          label="Username"
          autoComplete="username"
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
          onChangeText={setPassword}
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry={hidePass ? true : false}
          autoCorrect={false}
          ref={(input) => {
            this.PasswordInput = input;
          }}
          underlineColor="transparent"
          theme={{ colors: { primary: '#002857' } }}
          // TODO: icon is functional but not visible
          right={
            <TextInput.Icon icon="eye" onPress={() => setHidePass(!hidePass)} />
          }
        />
        {/* <LinkButton
          to={'/Home'}
          containerStyles={styles.loginContainer}
          textStyles={styles.loginText}
        >
          Log In
        </LinkButton> */}
        <Button
          mode="contained"
          style={styles.btnContainer}
          buttonColor="#002857"
          labelStyle={styles.loginText}
          dark={true}
          onPress={handleLogin}
        >
          Login
        </Button>
        <Button
          mode="text"
          style={styles.btnContainer}
          labelStyle={styles.loginText}
          onPress={handleLogin}
        >
          Register
        </Button>
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

export default Login;
