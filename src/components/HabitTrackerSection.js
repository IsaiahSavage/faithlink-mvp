import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ContentModal from './ContentModal';
import { Portal } from 'react-native-paper';
import { useUserContext } from '../contexts/UserContext';
import { FIRESTORE_DB } from '../../firebase/firebaseConfig';
import { getDoc, doc, setDoc } from 'firebase/firestore';

const HabitTrackerSection = ({ habitID, title, text, content }) => {
  const { state, dispatch } = useUserContext();

  const [complete, setComplete] = useState(
    state.userData.habitStatus[habitID] && true,
  );
  const [isContentModalVisible, setIsContentModalVisible] = useState(false);
  // const [isBusy, setIsBusy] = useState(false);

  const toggleTask = async () => {
    setComplete((complete) => !complete);

    const userDoc = await getDoc(doc(FIRESTORE_DB, `users/${state.userID}`));

    setDoc(
      userDoc.ref,
      {
        habitStatus: {
          ...state.userData.habitStatus,
          [habitID]: !complete,
        },
      },
      { merge: true },
    )
      .then(() =>
        dispatch({
          type: 'SET_HABIT_STATUS',
          payload: {
            ...state.userData.habitStatus,
            [habitID]: !complete,
          },
        }),
      )
      .catch((error) => console.error(error));
  };

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
