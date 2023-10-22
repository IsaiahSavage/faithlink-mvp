import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import LoginTracker from '../components/LoginTracker';
import HabitTracker from '../components/HabitTracker';

const TodayScreen = () => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome, Isaiah!</Text>
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
