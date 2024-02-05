import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUserContext } from '../contexts/UserContext';
import { FIRESTORE_DB } from '../../firebase/firebaseConfig';
import { doc, updateDoc, Timestamp } from 'firebase/firestore';

/**
 * LoginTracker component tracks the user's login streak and displays it on the screen.
 * It updates the login streak in the user's data and renders the login streak UI.
 */
const LoginTracker = () => {
  const { state, dispatch } = useUserContext();

  /**
   * Sets the login streak for a user based on the last login date and current streak.
   * @param {Object} lastLogin - The last login date object.
   * @param {number} loginStreak - The current login streak.
   * @returns {Promise<void>} - A promise that resolves when the login streak is updated.
   */
  const setLoginStreak = async (lastLogin, loginStreak) => {
    if (!lastLogin || !loginStreak) return;
    try {
      const today = new Date(Date.now());
      const lastLoginDate = new Date(lastLogin.seconds * 1000);
      const yesterday = new Date(today - 24 * 60 * 60 * 1000);

      if (lastLoginDate.toDateString() === today.toDateString()) {
        return;
      } else if (lastLoginDate.getDate() < yesterday.getDate()) {
        dispatch({ type: 'SET_LOGIN_STREAK', payload: 1 });
        dispatch({
          type: 'SET_LAST_LOGIN_DATE',
          payload: Timestamp.fromDate(today),
        });
        const userRef = doc(FIRESTORE_DB, 'users', state.userID);
        await updateDoc(userRef, {
          loginStreak: 1,
          lastLoginDate: Timestamp.fromDate(today),
        });
      } else if (lastLoginDate.getDate() < today.getDate()) {
        dispatch({ type: 'SET_LOGIN_STREAK', payload: loginStreak + 1 });
        dispatch({
          type: 'SET_LAST_LOGIN_DATE',
          payload: Timestamp.fromDate(today),
        });
        const userRef = doc(FIRESTORE_DB, 'users', state.userID);
        await updateDoc(userRef, {
          loginStreak: loginStreak + 1,
          lastLoginDate: Timestamp.fromDate(today),
        });
      }
    } catch (error) {
      console.log('Error updating login streak: ' + error.message);
    }
  };

  useEffect(() => {
    setLoginStreak(state.userData.lastLoginDate, state.userData.loginStreak);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.loginText, styles.loginTitle]}>Login Streak</Text>
      {/* <View style={styles.loginCheckContainer}>
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'#337AB7'} />
        <Feather name={'check'} size={35} color={'gray'} />
      </View> */}
      <Text style={[styles.loginText, styles.loginBody]}>
        {state.userData.loginStreak}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  loginText: {
    marginHorizontal: 10,
    fontSize: 20,
    marginVertical: 5,
    color: '#002857',
  },
  loginTitle: {
    fontWeight: '600',
  },
  loginBody: {
    fontSize: 60,
    marginBottom: 10,
  },
  loginCheckContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
});

export default LoginTracker;
