import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, Linking, ActivityIndicator } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SignInStack from './src/navigators/SignInNavigator';

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';

const THEME_LIGHT = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#002857',
    background: 'white',
  },
  dark: false,
};

export default function App() {
  const [isReady, setIsReady] = useState(__DEV__ ? false : true);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady) {
    // TODO: customize loading screen
    return <ActivityIndicator size={'large'} color={'#002857'} />;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
      theme={THEME_LIGHT} // TODO: create ternary for dark/light theme
    >
      <StatusBar style="auto" />
      <SignInStack />
    </NavigationContainer>
  );
}
