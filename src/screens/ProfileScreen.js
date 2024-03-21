import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import LoginTracker from '../components/LoginTracker';
import HabitTracker from '../components/HabitTracker';
import { useUserContext } from '../contexts/UserContext';

const ProfileScreen = () => {
  const { state, dispatch } = useUserContext();

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>
            Welcome,{' '}
            {Object.hasOwn(state.userData, 'first')
              ? state.userData.first
              : 'User'}
            !
          </Text>
          <LoginTracker style={styles.welcomeStreak} />
        </View>
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
  welcomeContainer: {
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#002857',
    marginLeft: 10,
    marginBottom: 25,
    flexBasis: '50%',
  },
  welcomeStreak: {
    flexGrow: 1,
    flexBasis: '50%',
  },
});

export default ProfileScreen;
