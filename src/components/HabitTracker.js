import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HabitTrackerSection from './HabitTrackerSection';

const HabitTracker = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Habits</Text>
      <View style={styles.trackerContainer}>
        <HabitTrackerSection title={'Scripture'} text={'Scripture'} />
        <HabitTrackerSection title={'Reflection'} text={'Reflection'} />
        <HabitTrackerSection title={'Prayer'} text={'Prayer'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'flex-start',
    marginVertical: 40,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    color: '#002857',
  },
  trackerContainer: {
    marginVertical: 10,
  },
});

export default HabitTracker;
