import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HabitTrackerSection from '../HabitTrackerSection';
import { PaperProvider } from 'react-native-paper';

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

describe('HabitTrackerSection', () => {
  it('renders the title and text correctly', () => {
    const title = 'My Habit';
    const text = 'This is my habit description';
    const { getByText } = render(
      <PaperProvider>
        <HabitTrackerSection title={title} text={text} />,
      </PaperProvider>,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(text)).toBeTruthy();
  });

  it('renders the content modal when pressed', () => {
    const title = 'My Habit';
    const text = 'This is my habit description';
    const content = 'This is my habit content';
    const { getByText, getByTestId } = render(
      <PaperProvider>
        <HabitTrackerSection title={title} text={text} content={content} />
      </PaperProvider>,
    );

    const textContainer = getByTestId('habit-tracker-section-text-container');
    fireEvent.press(textContainer);

    setTimeout(() => {
      expect(getByText(title)).toBeTruthy();
      expect(getByText(content)).toBeTruthy();
    }, 1000);
  });

  // TODO: Add test for toggling task completion
  it('toggles task completion when pressed', () => {
    const title = 'My Habit';
    const text = 'This is my habit description';
    const { getByTestId } = render(
      <PaperProvider>
        <HabitTrackerSection title={title} text={text} />
      </PaperProvider>,
    );

    const checkbox = getByTestId('habit-tracker-section-checkbox');
    fireEvent.press(checkbox);

    setTimeout(() => {
      expect(checkbox).not.toHaveStyle({ backgroundColor: '#337AB7' });
    }, 1000);
  });

  // TODO: Add test for task completion state

  // TODO: Add test for task completion state persistence
});
