import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUserContext } from '../contexts/UserContext';
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../firebase/firebaseConfig';
import { doc, updateDoc, Timestamp } from 'firebase/firestore';

/**
 * LoginTracker component tracks the user's login streak and displays it on the screen.
 * It updates the login streak in the user's data and renders the login streak UI.
 */
const LoginTracker = () => {
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useUserContext();

  const setLoginStreak = () => {
    const today = new Date(Date.now());
    const lastLoginDate = new Date(
      FIREBASE_AUTH.currentUser.metadata.lastSignInTime,
    );

    // Check if the user has already logged in today
    if (lastLoginDate.toDateString() === today.toDateString()) {
      return;
    }

    // Check if user logged in yesterday
    const yesterday = new Date(today - 24 * 60 * 60 * 1000);
    if (lastLoginDate.getDate() === yesterday.getDate()) {
      updateDoc(doc(FIRESTORE_DB, `users/${state.userID}`), {
        loginStreak: state.userData.loginStreak + 1,
      })
        .then(() => {
          dispatch({
            type: 'SET_LOGIN_STREAK',
            payload: state.userData.loginStreak + 1,
          });
        })
        .catch((error) => {
          console.log('Error updating login streak: ' + error.message);
        });
    } else {
      updateDoc(doc(FIRESTORE_DB, `users/${state.userID}`), { loginStreak: 1 })
        .then(() => {
          dispatch({ type: 'SET_LOGIN_STREAK', payload: 1 });
        })
        .catch((error) => {
          console.log('Error updating login streak: ' + error.message);
        });
    }
  };

  useEffect(() => {
    setLoading(true);
    setLoginStreak();
    setLoading(false);
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
      {loading ? (
        <></>
      ) : (
        <Text style={[styles.loginText, styles.loginBody]}>
          {state.userData.loginStreak}
        </Text>
      )}
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
