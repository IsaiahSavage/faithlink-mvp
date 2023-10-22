import React from 'react';
import { noHeader } from '../settings';
import { Stack } from '../Stack';
import ActivityScreen from '../screens/ActivityScreen';

const ActivityStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="Activity" component={ActivityScreen} />
      {/* Add additional screens here */}
    </Stack.Navigator>
  );
};

export default ActivityStack;
