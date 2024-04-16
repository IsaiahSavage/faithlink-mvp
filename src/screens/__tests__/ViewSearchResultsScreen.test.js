import React from 'react';
import { render } from '@testing-library/react-native';

import ViewSearchResultsScreen from '../ViewSearchResultsScreen';

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

describe('View Search Results Screen', () => {
  //does page render
  it('page renders correectly', () => {
    render(
      <ViewSearchResultsScreen
        route={{ params: { type: 'media', search: '' } }}
      />,
    );
  });

  //is snapshot same

  //does the word in the search bar match the word in 'Search results for ____'

  //if there is a resource, does the searched for string match any part of the title of the resource

  //can you swipe and get back to the resources page
});
