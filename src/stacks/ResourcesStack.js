import React from 'react';
import { noHeader } from '../settings';
import { Stack } from '../Stack';
import ResourcesScreen from '../screens/ResourcesScreen';
import ViewResourceScreen from '../screens/ViewResourceScreen';

const ResourcesStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen name="ResourcesScreen" component={ResourcesScreen} />
      <Stack.Screen name="ViewResourceScreen" component={ViewResourceScreen} />
      {/* Add additional screens here */}
    </Stack.Navigator>
  );
};

export default ResourcesStack;
