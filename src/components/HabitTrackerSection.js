import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const HabitTrackerSection = ({ title, text, isComplete }) => {
  const [complete, setComplete] = useState(isComplete && true);

  const toggleTask = () => setComplete(!complete);

  return (
    <View style={styles.container}>
      <Pressable
        style={() => [
          {
            backgroundColor: complete ? '#337AB7' : '#E8E8E8',
          },
          styles.circle,
        ]}
        onPress={toggleTask}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.text, styles.title]}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  textContainer: {
    padding: 10,
    backgroundColor: '#E8E8E8',
    marginLeft: 10,
    borderRadius: 10,
    flexGrow: 3,
    minHeight: 75,
  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
  },
});

export default HabitTrackerSection;
