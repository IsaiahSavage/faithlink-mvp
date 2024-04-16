import React from 'react';
import { render } from '@testing-library/react-native';

import LoginScreen from '../LoginScreen';
describe('Login Screen',() =>{

    //does the page render

    describe('LoginScreen', () => {
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
})});