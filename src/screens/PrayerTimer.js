import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

const PrayerTimer = (requests) => {
  const [timer, setTimer] = useState({
    minutes: 0,
    seconds: 5,
  });

  const [isRunning, setIsRunning] = useState(false);

  const handleTimerStartStop = () => {
    setIsRunning((val) => !val);
    if (isRunning) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        setTimer((timer) => {
          if (timer.minutes === 0 && timer.seconds === 0) {
            setIsRunning(false);
            clearInterval(interval);
            return timer;
          }
          const newTimer = {
            minutes: timer.seconds === 0 ? timer.minutes - 1 : timer.minutes,
            seconds: timer.seconds === 0 ? 59 : timer.seconds - 1,
          };
          return newTimer;
        });
      }, 1000);
    }
  };

  const resetTimer = () => {
    setTimer(() => {
      return { minutes: 0, seconds: 5 };
    });
  };

  return (
    <SafeAreaView style={styles.contentContainer}>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{timer.minutes}</Text>
        <Text style={styles.timerText}>:</Text>
        <Text style={styles.timerText}>
          {`${timer.seconds}`.padStart(2, '0')}
        </Text>
      </View>
      <View style={styles.currentRequestContainer}>
        <ScrollView>
          <Text style={styles.currentRequestHeader}>I need help</Text>
          <Text style={styles.currentRequestBody}>
            I do not know what to do.
          </Text>
        </ScrollView>
      </View>
      <View style={styles.requestButtonContainer}>
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>{'< Previous'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.requestButton}>
          <Text style={styles.requestButtonText}>{'Next >'}</Text>
        </TouchableOpacity>
      </View>
      <Button
        onPress={() => handleTimerStartStop()}
        style={[styles.startStopButtonContainer, styles.startStopButtonText]}
        title={isRunning ? 'Stop' : 'Start'}
      />
      <Button
        disabled={isRunning}
        onPress={() => resetTimer()}
        style={[styles.startStopButtonContainer, styles.startStopButtonText]}
        title="Reset"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  contentContainer: {
    flex: 1,
  },
  timerContainer: {
    flexDirection: 'row',
    height: 225,
    width: 225,
    borderRadius: 225 / 2,
    borderColor: '#E8E8E8',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  timerText: {
    fontSize: 35,
    color: '#002857',
  },
  currentRequestContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    minHeight: 100,
  },
  currentRequestHeader: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 20,
  },
  currentRequestBody: {
    marginLeft: 10,
  },
  startStopButtonContainer: {
    backgroundColor: '#002857',
    alignSelf: 'center',
    width: 300,
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 100,
    marginTop: 25,
  },
  startStopButtonText: {
    color: 'white',
    fontSize: 20,
  },
  requestButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22, // TODO: 22 or 32?
  },
  requestButton: {},
  requestButtonText: {
    fontSize: 20,
  },
});

export default PrayerTimer;
