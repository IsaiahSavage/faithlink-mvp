import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderProfileButton from './HeaderProfileButton';
import HeaderHome from './HeaderHome';
import HomeStack from '../screens/Home';
import Profile from '../screens/Profile';
import LinkButton from './LinkButton';
import Login from '../screens/Login';
import Resources from '../screens/Resources';
import Prayer from '../screens/Prayer';
import PrayerTimer from '../screens/PrayerTimer';
import Activity from '../screens/Activity';
import Settings from '../screens/Settings';
import HeaderBackButton from './HeaderBackButton';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#002857',
        tabBarInactiveTintColor: '#E8E8E8',
        tabBarShowLabel: false,
        headerStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name={'Home'}
        options={{
          headerTitle: () => <HeaderHome />,
          headerRight: () => <HeaderProfileButton />,
          headerLeft: () => <View style={{ marginTop: 10 }}></View>, // Resolves issue with top margin for header profile
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'home-outline'}
              size={40}
              color={focused ? '#002857' : '#E8E8E8'}
            />
          ),
        }}
      >
        {() => <HomeStack />}
      </Tab.Screen>
      <Tab.Screen
        name={'Resources'}
        options={{
          // headerTitle: () => <HeaderHome />,
          headerRight: () => <HeaderProfileButton />,
          headerLeft: () => <View style={{ marginTop: 10 }}></View>, // Resolves issue with top margin for header profile
          headerTitleStyle: {
            fontSize: 25,
            color: '#337AB7',
            fontWeight: 'normal',
          },
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'search'}
              size={35}
              color={focused ? '#002857' : '#E8E8E8'}
            />
          ),
        }}
      >
        {() => <Resources />}
      </Tab.Screen>
      <Tab.Screen
        name={'Prayer'}
        options={{
          // headerTitle: () => <HeaderHome />,
          headerRight: () => <HeaderProfileButton />,
          headerLeft: () => <View style={{ marginTop: 10 }}></View>, // Resolves issue with top margin for header profile
          headerTitleStyle: {
            fontSize: 25,
            color: '#337AB7',
            fontWeight: 'normal',
          },
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'hands-pray'}
              size={35}
              color={focused ? '#002857' : '#E8E8E8'}
            />
          ),
        }}
      >
        {() => <Prayer />}
      </Tab.Screen>
      <Tab.Screen
        name={'Activity'}
        options={{
          // headerTitle: () => <HeaderHome />,
          headerRight: () => <HeaderProfileButton />,
          headerLeft: () => <View style={{ marginTop: 10 }}></View>, // Resolves issue with top margin for header profile
          headerTitleStyle: {
            fontSize: 25,
            color: '#337AB7',
            fontWeight: 'normal',
          },
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'bell'}
              size={35}
              color={focused ? '#002857' : '#E8E8E8'}
            />
          ),
        }}
      >
        {() => <Activity />}
      </Tab.Screen>
      <Tab.Screen
        name={'Profile'}
        options={{
          headerLeft: () => <HeaderProfileButton />,
          headerTitle: () => (
            <Text
              style={{
                color: '#337AB7',
                fontSize: 25,
                right: 40,
              }}
            >
              Isaiah Savage
            </Text>
          ),
          headerRight: () => (
            <LinkButton
              to={{ screen: 'Login' }}
              containerStyles={{}}
              textStyles={{ color: '#002857', fontSize: 20 }}
              style={{ marginRight: 20 }}
            >
              Logout
            </LinkButton>
          ),
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'menu'}
              size={35}
              color={focused ? '#002857' : '#E8E8E8'}
            />
          ),
        }}
      >
        {() => <Profile />}
      </Tab.Screen>
      <Tab.Screen
        name={'Login'}
        options={{
          tabBarIcon: () => <></>,
          tabBarButton: () => <></>,
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      >
        {() => <Login />}
      </Tab.Screen>
      <Tab.Screen
        name={'PrayerTimer'}
        options={{
          tabBarIcon: () => <></>,
          tabBarButton: () => <></>,
          // headerShown: false,
          headerLeft: () => <HeaderBackButton previousScreen={'/Prayer'} />,
          tabBarStyle: { display: 'none' },
        }}
      >
        {() => <PrayerTimer />}
      </Tab.Screen>
      {/* TODO: remove once Profile.js is refactored */}
      <Tab.Screen
        name={'Settings'}
        options={{
          tabBarIcon: () => <></>,
          tabBarButton: () => <></>,
          headerShown: true,
          headerLeft: () => <HeaderBackButton previousScreen={'/Profile'} />,
          tabBarStyle: { display: 'none' },
        }}
      >
        {() => <Settings />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
