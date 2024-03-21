import React from 'react';
import { noHeader } from './settings';
import { backButtonYeet } from './settings';
import { defaultHeader } from './settings';
import { Stack } from './Stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const AuthScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Login'} component={LoginScreen} options={noHeader} />
      <Stack.Screen
        name={'Register'}
        component={RegisterScreen}
        options={backButtonYeet}
      />
    </Stack.Navigator>
  );
};

export default AuthScreens;
