import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TodayScreen from '../screens/TodayScreen';
import GroupScreen from '../screens/GroupScreen';

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
        {() => <TodayScreen />}
      </HomeStackScreen.Screen>
      <HomeStackScreen.Screen name={'Group'}>
        {() => <GroupScreen />}
      </HomeStackScreen.Screen>
    </HomeStackScreen.Navigator>
  );
};

export default HomeStack;
