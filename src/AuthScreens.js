import React from 'react';
import { noHeader } from './settings';
import { Stack } from './Stack';
import Login from './screens/Login';

const AuthScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Login'} component={Login} options={noHeader} />
    </Stack.Navigator>
  );
};

export default AuthScreens;
