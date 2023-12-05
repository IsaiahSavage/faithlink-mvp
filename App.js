import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './src/Stack';
import { noHeader } from './src/settings';
import UserScreens from './src/UserScreens';
import AuthScreens from './src/AuthScreens';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { FIREBASE_AUTH, FIRESTORE_DB } from './firebase/firebaseConfig';
import { ActivityIndicator } from 'react-native-paper';
import { UserProvider } from './src/contexts/UserContext';

export default function App() {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [isBusy, setIsBusy] = useState(false);

  // Update user state when auth state changes
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      if (user) {
        setIsBusy(true);
        const userQuery = query(
          collection(FIRESTORE_DB, 'users'),
          where('email', '==', user?.email),
        );

        getDocs(userQuery)
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              setUserData((userData) => ({ ID: doc.id, data: doc.data() }));
            });
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => setIsBusy(false));
      }
    });
  }, []);

  return isBusy ? (
    <ActivityIndicator animating={true} style={{ height: '100%' }} />
  ) : (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {user ? (
            <Stack.Screen
              name="UserScreens"
              component={UserScreens}
              options={noHeader}
              initialParams={{
                userData: userData,
              }}
            />
          ) : (
            <Stack.Screen
              name="AuthScreens"
              component={AuthScreens}
              options={noHeader}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
