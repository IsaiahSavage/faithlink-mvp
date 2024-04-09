import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HabitTrackerSection from './HabitTrackerSection';
import {
  MSG_HTML_FAILED_TO_LOAD,
  getDevoOfTheDay,
  getPrayerOfTheDay,
  getVerseOfTheDay,
} from '../utils/FetchUtils';

const VERSE_MAX_CHARS = 72;

const HabitTracker = () => {
  const [isBusy, setIsBusy] = useState(true);
  const [votd, setVOTD] = useState({
    citation: '',
    passage: 'Loading...',
  });
  const [devo, setDevo] = useState(MSG_HTML_FAILED_TO_LOAD);
  const [prayer, setPrayer] = useState(MSG_HTML_FAILED_TO_LOAD);

  useEffect(() => {
    setIsBusy(true);
    getVerseOfTheDay()
      .then((response) => {
        if (response.hasOwnProperty('citation')) {
          setVOTD(response);
        } else {
          setVOTD({
            citation: '',
            passage: 'Error fetching verse of the day.',
          });
        }
      })
      .finally(() => {
        setIsBusy(false);
      });
    setDevo(() => getDevoOfTheDay());
    setPrayer(() => getPrayerOfTheDay());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Habits</Text>
      <View style={styles.trackerContainer}>
        <HabitTrackerSection
          title={`Scripture: ${votd.citation}`}
          text={
            isBusy
              ? 'Loading...'
              : votd.passage.length > VERSE_MAX_CHARS
                ? votd.passage.slice(0, VERSE_MAX_CHARS) + '...'
                : votd.passage
          }
          content={votd.passage}
        />
        <HabitTrackerSection
          title={'Reflection'}
          text={'View a short devo and reflect on it.'}
          content={devo}
        />
        <HabitTrackerSection
          title={'Prayer'}
          text={'Spend some time with God today.'}
          content={prayer}
        />
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
