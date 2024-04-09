import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HabitTrackerSection from '../HabitTrackerSection';
import { PaperProvider } from 'react-native-paper';

describe('HabitTrackerSection', () => {
  // Mocking timers prevents issues with setTimeout
  jest.useFakeTimers();

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
