import React from 'react';
import { noHeader } from '../settings';
import { Stack } from '../Stack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      {/* Add additional screens here */}
    </Stack.Navigator>
  );
};

export default ProfileStack;
