import React from 'react';
import { noHeader } from '../settings';
import { Stack } from '../Stack';
import ResourcesScreen from '../screens/ResourcesScreen';
import ViewResourceScreen from '../screens/ViewResourceScreen';
import ViewSearchResultsScreen from '../screens/ViewSearchResultsScreen';
import CreateResourceScreen from '../screens/CreateResourceScreen';

const ResourcesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ResourcesScreen"
      screenOptions={noHeader}
    >
      <Stack.Screen name="ResourcesScreen" component={ResourcesScreen} />
      <Stack.Screen
        name="ViewSearchResultsScreen"
        component={ViewSearchResultsScreen}
      />
      <Stack.Screen name="ViewResourceScreen" component={ViewResourceScreen} />
      <Stack.Screen
        name="CreateResourceScreen"
        component={CreateResourceScreen}
      />
    </Stack.Navigator>
  );
};

export default ResourcesStack;
