import React from 'react';
import { render } from '@testing-library/react-native';
import PrivacyPolicy from '../PrivacyPolicy'

describe('PrivacyPolicy', () =>{
    //see if it renders
    it('page renders correectly', () =>{
       render(<PrivacyPolicy/>); 
    });

    //is not changing between loads
    it('matches the snapshot', () => {
        const { toJSON } = render(<PrivacyPolicy />);
        expect(toJSON()).toMatchSnapshot();
      });

    //text matches
    it('text is the same', () =>{
        const {getByText} = render(<PrivacyPolicy/>);
        const title = getByText(/Privacy Policy/);
        const text = getByText(/Coming soon./);
        expect(title).toBeTruthy();
        expect(text).toBeTruthy();
    });
});