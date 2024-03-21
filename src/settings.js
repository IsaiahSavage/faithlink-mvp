/**
 * @fileoverview Settings for pages to import.
 */

import HeaderProfileButton from './components/HeaderProfileButton';
import RegisterBackButton from './components/RegisterBackButton';
import HeaderBackButton from './components/HeaderBackButton';
import { View } from 'react-native';
import AuthScreens from './AuthScreens';

//#region Header Components
export const noHeader = {
  headerShown: false,
};

export const defaultHeader = {
  headerShown: true,
  headerLeft: () => <View style={{ marginTop: 10 }}></View>, // Resolves issue with top margin for header profile
  headerRight: () => <HeaderProfileButton />,
  headerTitleStyle: {
    fontSize: 25,
    color: '#337AB7',
    fontWeight: 'normal',
  },
};

export const backButtonYeet = {
  headerShown: true,
  headerLeft: () => <HeaderBackButton />, // Resolves issue with top margin for header profile
  headerRight: () => <RegisterBackButton />,
  headerTitleStyle: {
    fontSize: 25,
    color: '#337AB7',
    fontWeight: 'normal',
  },
};

export const defaultHeaderWithBackButton = {
  headerShown: true,
  headerLeft: () => <HeaderBackButton />,
  headerRight: () => <HeaderProfileButton />,
  headerTitleStyle: {
    fontSize: 25,
    color: '#337AB7',
    fontWeight: 'normal',
  },
};

//#endregion Header Components
