import React from 'react';
import { Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Today from './Today';
import Group from './Group';

const HomeStackScreen = createMaterialTopTabNavigator();

const Home = () => {
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

export default Home;
