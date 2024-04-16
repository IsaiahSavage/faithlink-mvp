import React from 'react';
import { render } from '@testing-library/react-native';

import CreateResourceScreen from '../CreateResourceScreen';

jest.useFakeTimers();

jest.mock('../../contexts/UserContext.js', () => ({
  __esModule: true,
  useUserContext: jest.fn(() => ({
    state: {
      // Mocked user data
      userID: 't3stp1dtjskgjqivnbvq',
      userData: {
        id: 1,
        first: 'John',
        last: 'Doe',
        email: 'john.doe@example.com',
        habitStatus: {
          scripture: true,
          reflection: true,
          prayer: true,
        },
      },
      groupID: 't3stg1d',
    },
    // Mocked function
    dispatch: jest.fn(),
  })),
}));

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('CreateResourceScreen', () => {
  //page renders
  it('page renders correctly', () => {
    render(<CreateResourceScreen />);
  });

  //is not changing between loads
  it('matches the snapshot', () => {
    const { toJSON } = render(<CreateResourceScreen />);
    expect(toJSON()).toMatchSnapshot();
  });

  //title matches
  it('text is the same', () => {
    const { getByText } = render(<CreateResourceScreen />);
    const title = getByText(/Create Resource/);
    expect(title).toBeTruthy();
  });
});
