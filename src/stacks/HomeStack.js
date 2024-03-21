import React from 'react';
import { Dimensions } from 'react-native';
import { Stack } from '../Stack';
import GroupScreen from '../screens/GroupScreen';
import AddUpdateScreen from '../screens/AddUpdateScreen';
import { noHeader } from '../settings';
import { useNavigation } from '@react-navigation/native';

const HomeStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Group" //Changed from "Today" -> "Group"
      // initialLayout={{
      //   width: Dimensions.get('window').width,
      // }}
      screenOptions={noHeader}
    >
      <Stack.Screen name={'Group'}>
        {() => <GroupScreen navigation={navigation} />}
      </Stack.Screen>
      <Stack.Screen name={'AddUpdateScreen'}>
        {() => <AddUpdateScreen navigation={navigation} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;
