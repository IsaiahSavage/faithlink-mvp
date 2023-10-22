import React from 'react';
import { noHeader } from '../settings';
import { Stack } from '../Stack';
import ResourcesScreen from '../screens/ResourcesScreen';

const ResourcesStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="ResourcesScreen" component={ResourcesScreen} />
      {/* Add additional screens here */}
    </Stack.Navigator>
  );
};

export default ResourcesStack;
