import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Today from '../screens/Today';
import Group from '../screens/Group';

const HomeStackScreen = createMaterialTopTabNavigator();

const HomeStack = () => {
  return (
    <HomeStackScreen.Navigator
      initialRouteName="Today"
      initialLayout={{
        width: Dimensions.get('window').width,
      }}
      screenOptions={{ tabBarStyle: { display: 'none' } }}
    >
      <HomeStackScreen.Screen name={'Today'}>
        {() => <Today />}
      </HomeStackScreen.Screen>
      <HomeStackScreen.Screen name={'Group'}>
        {() => <Group />}
      </HomeStackScreen.Screen>
    </HomeStackScreen.Navigator>
  );
};

export default HomeStack;
