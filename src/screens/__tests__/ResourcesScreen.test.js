import React from 'react';
import { render } from '@testing-library/react-native';

import ResourcesScreen from '../ResourcesScreen';

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

describe('ResourcesScreen', () => {
  //does page render
  it('page renders correectly', () => {
    render(<ResourcesScreen />);
  });

  //is snapshot same

  //Can input be put into the top bar

  //does clicking on each of the 'articles' 'videos' etc buttons actually take you to the search page

  //bottom righthand button should take you to createResourceScreen

  //selecting the 'featured resource' on the front page should send you to the featured resource
});
