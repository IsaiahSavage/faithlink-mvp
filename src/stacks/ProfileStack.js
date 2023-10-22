import React from 'react';
import { noHeader } from '../settings';
import { Stack } from '../Stack';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
      {/* Add additional screens here */}
    </Stack.Navigator>
  );
};

export default ProfileStack;
