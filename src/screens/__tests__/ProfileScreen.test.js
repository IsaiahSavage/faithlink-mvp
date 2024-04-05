import React from 'react';
import { render } from '@testing-library/react-native';
import ProfileScreen from '../ProfileScreen';

jest.mock('../../contexts/UserContext.js', () => ({
  __esModule: true,
  useUserContext: jest.fn(() => ({
    state: {
      // Mocked user data
      userID: 1,
      userData: {
        id: 1,
        first: 'John',
        last: 'Doe',
        email: 'john.doe@example.com',
      },
    },
    // Mocked function
    dispatch: jest.fn(),
  })),
}));

jest.mock('../../components/LoginTracker.js', () => {
  return function MockLoginTracker() {
    const React = require('react');
    const { View } = require('react-native');
    return <View testID="loginTracker"></View>;
  };
});

jest.mock('../../components/HabitTracker.js', () => {
  return function MockHabitTracker() {
    const React = require('react');
    const { View } = require('react-native');
    return <View testID="habitTracker"></View>;
  };
});

describe('ProfileScreen', () => {
  it('renders without crashing', () => {
    render(<ProfileScreen />);
  });

  it('displays the welcome message', () => {
    const { getByText } = render(<ProfileScreen />);
    const welcomeMessage = getByText(/Welcome, John!/);
    expect(welcomeMessage).toBeTruthy();
  });

  it('displays the login tracker component', () => {
    const { getByTestId } = render(<ProfileScreen />);
    const loginTracker = getByTestId('loginTracker');
    expect(loginTracker).toBeTruthy();
  });

  it('displays the habit tracker component', () => {
    const { getByTestId } = render(<ProfileScreen />);
    const habitTracker = getByTestId('habitTracker');
    expect(habitTracker).toBeTruthy();
  });
});
