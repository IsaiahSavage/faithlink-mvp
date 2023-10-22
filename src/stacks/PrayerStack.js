import React from 'react';
import { noHeader } from '../settings';
import { Stack } from '../Stack';
import PrayerScreen from '../screens/PrayerScreen';
import PrayerTimer from '../screens/PrayerTimer';

const PrayerStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="Prayer" component={PrayerScreen} />
      <Stack.Screen name="PrayerTimer" component={PrayerTimer} />
      {/* Add additional screens here */}
    </Stack.Navigator>
  );
};

export default PrayerStack;
