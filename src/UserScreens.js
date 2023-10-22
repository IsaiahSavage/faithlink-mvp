import React from 'react';
import { defaultHeader } from './settings';
import { Tabs } from './Tabs';
import { Text } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderProfileButton from './components/HeaderProfileButton';
import LinkButton from './components/LinkButton';
import HeaderHome from './components/HeaderHome';
import HomeStack from './stacks/HomeStack';
import ResourcesStack from './stacks/ResourcesStack';
import PrayerStack from './stacks/PrayerStack';
import ActivityStack from './stacks/ActivityStack';
import ProfileStack from './stacks/ProfileStack';

const UserScreens = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#002857',
        tabBarInactiveTintColor: '#E8E8E8',
        tabBarShowLabel: false,
        headerStyle: {
          // TODO: try on iPhone with notch
          // height: 80,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeStack}
        options={{
          ...defaultHeader,
          headerTitle: () => <HeaderHome />,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'home-outline'}
              size={40}
              color={focused ? '#002857' : '#E8E8E8'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Resources"
        component={ResourcesStack}
        options={{
          ...defaultHeader,
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'search'}
              size={35}
              color={focused ? '#002857' : '#E8E8E8'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Prayer"
        component={PrayerStack}
        options={{
          ...defaultHeader,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={'hands-pray'}
              size={35}
              color={focused ? '#002857' : '#E8E8E8'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Activity"
        component={ActivityStack}
        options={{
          ...defaultHeader,
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'bell'}
              size={35}
              color={focused ? '#002857' : '#E8E8E8'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="More"
        component={ProfileStack}
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
          // TODO: reimplement as button that is sets isLoggedin to false
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
      />
    </Tabs.Navigator>
  );
};

export default UserScreens;
