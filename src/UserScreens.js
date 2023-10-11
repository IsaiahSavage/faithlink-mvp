import React from 'react';
import { defaultHeader } from './settings';
import { Stack } from './Stack';
import { Text } from 'react-native';
import HeaderProfileButton from './components/HeaderProfileButton';
import LinkButton from './components/LinkButton';
import Home from './screens/Home';
import Resources from './screens/Resources';
import HeaderHome from './components/HeaderHome';
import Prayer from './screens/Prayer';
import Activity from './screens/Activity';
import Profile from './screens/Profile';

const UserScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ defaultHeader, headerTitle: () => <HeaderHome /> }}
      />
      <Stack.Screen
        name="Resources"
        component={Resources}
        options={defaultHeader}
      />
      <Stack.Screen name="Prayer" component={Prayer} options={defaultHeader} />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={defaultHeader}
      />
      <Stack.Screen
        name="More"
        component={Profile}
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
        }}
      />
    </Stack.Navigator>
  );
};

export default UserScreens;
