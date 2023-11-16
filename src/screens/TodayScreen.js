import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import LoginTracker from '../components/LoginTracker';
import HabitTracker from '../components/HabitTracker';
import { useUserContext } from '../contexts/UserContext';

const TodayScreen = () => {
  // const [userData, setUserData] = useState(null);
  const { state, dispatch } = useUserContext();

  const setUserID = (id) => {
    dispatch({ type: 'SET_USER_ID', payload: id });
  };
  const setUserData = (data) => {
    dispatch({ type: 'SET_USER_DATA', payload: data });
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>
          Welcome,{' '}
          {Object.hasOwn(state.userData, 'first')
            ? state.userData.first
            : 'User'}
          !
        </Text>
        <LoginTracker />
        <HabitTracker />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#002857',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 25,
  },
});

export default TodayScreen;
