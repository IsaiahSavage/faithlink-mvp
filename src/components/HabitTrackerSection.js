import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ContentModal from './ContentModal';
import { Portal } from 'react-native-paper';

const HabitTrackerSection = ({ title, text, content, isComplete }) => {
  const [complete, setComplete] = useState(isComplete && true);
  const [isContentModalVisible, setIsContentModalVisible] = useState(false);

  const toggleTask = () => setComplete(!complete);

  const showContentModal = () => setIsContentModalVisible(true);
  const hideContentModal = () => setIsContentModalVisible(false);

  return (
    <View style={styles.container}>
      <Pressable
        testID="habit-tracker-section-checkbox"
        style={() => [
          {
            backgroundColor: complete ? '#337AB7' : '#E8E8E8',
          },
          styles.circle,
        ]}
        onPress={toggleTask}
      />
      <Pressable
        testID="habit-tracker-section-text-container"
        onPress={showContentModal}
        style={styles.textContainer}
      >
        <Text style={[styles.text, styles.title]}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
      <Portal>
        <ContentModal
          visible={isContentModalVisible}
          hideModal={hideContentModal}
          title={title}
          content={content}
        />
      </Portal>
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
    maxWidth: '90%',
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
