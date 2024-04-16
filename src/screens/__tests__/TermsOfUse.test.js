import React from 'react';
import { render } from '@testing-library/react-native';
import TermsOfUse from '../TermsOfUse'

describe('PrivacyPolicy', () =>{
    //see if it renders
    it('page renders correectly', () =>{
       render(<TermsOfUse/>); 
    });

    //is not changing between loads
    it('matches the snapshot', () => {
        const { toJSON } = render(<TermsOfUse />);
        expect(toJSON()).toMatchSnapshot();
      });

    //text matches
    it('text is the same', () =>{
        const {getByText} = render(<TermsOfUse/>);
        const title = getByText(/Terms of Use/);
        const text = getByText(/Coming soon./);
        expect(title).toBeTruthy();
        expect(text).toBeTruthy();
    });
});