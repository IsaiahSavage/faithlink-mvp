import React from 'react';
import { noHeader } from '../settings';
import { Stack } from '../Stack';
import MoreScreen from '../screens/MoreScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TermsOfUse from '../screens/TermsOfUse';
import PrivacyPolicy from '../screens/PrivacyPolicy';

const MoreStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="More" component={MoreScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </Stack.Navigator>
  );
};

export default MoreStack;
