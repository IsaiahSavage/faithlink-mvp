import React, { useEffect } from 'react';
import { defaultHeader } from './settings';
import { Tabs } from './Tabs';
import { Text } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import HeaderProfileButton from './components/HeaderProfileButton';
import HeaderHome from './components/HeaderHome';
import GroupScreen from './screens/GroupScreen';
import ResourcesStack from './stacks/ResourcesStack';
import PrayerStack from './stacks/PrayerStack';
import ActivityStack from './stacks/ActivityStack';
import ProfileStack from './stacks/ProfileStack';
import { IconButton } from 'react-native-paper';
import { FIREBASE_AUTH } from '../firebase/firebaseConfig';
import { useUserContext } from './contexts/UserContext';
import HomeStack from './stacks/HomeStack';

const UserScreens = ({ route }) => {
  const { state, dispatch } = useUserContext();

  const user = route.params.userData;

  useEffect(() => {
    if (!user) return;
    dispatch({ type: 'SET_USER_ID', payload: user.ID });
    dispatch({ type: 'SET_USER_DATA', payload: user.data });
  }, []);

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
      {/* See https://github.com/IsaiahSavage/mvnu-spiritual-life-app/issues/41: Disabled for MVP */}
      {/* <Tabs.Screen
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
      /> */}
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
              {user ? `${user.data.first} ${user.data.last}` : 'User'}
            </Text>
          ),
          headerRight: () => (
            <IconButton
              icon="logout"
              size={35}
              style={{
                alignContent: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
              }}
              labelStyle={{ color: '#002857', fontSize: 20 }}
              onPress={() => FIREBASE_AUTH.signOut()}
            />
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
