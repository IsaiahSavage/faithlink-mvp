import React from 'react';
import { render } from '@testing-library/react-native';
import SettingsScreen from '../SettingsScreen'

describe('PrivacyPolicy', () =>{
    //see if it renders
    it('page renders correectly', () =>{
       render(<SettingsScreen />); 
    });

    //is not changing between loads
    it('matches the snapshot', () => {
        const { toJSON } = render(<SettingsScreen />);
        expect(toJSON()).toMatchSnapshot();
      });

    //text matches
    it('text is the same', () =>{
        const {getByText} = render(<SettingsScreen />);
        const title = getByText(/Settings coming soon!/);
        expect(title).toBeTruthy();
    });
});