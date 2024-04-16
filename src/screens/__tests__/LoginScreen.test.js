import React from 'react';
import { act, render } from '@testing-library/react-native';

import LoginScreen from '../LoginScreen';

jest.useFakeTimers();

describe('LoginScreen', () => {
  //does the page render
  it('renders correctly', () => {
    render(<LoginScreen />);
  });

  //does it match the snapshot
  it('matches the snapshot', () => {
    const { toJSON } = render(<LoginScreen />);
    expect(toJSON()).toMatchSnapshot();
  });

  //is the header the same?
  it('header is the same', () => {
    const { getByText } = render(<LoginScreen />);
    const title = getByText(/Login/);
    expect(title).toBeTruthy();
  });

  //Does the create account button take you to the registration page?

  //Does the test login actually log you in?
});
