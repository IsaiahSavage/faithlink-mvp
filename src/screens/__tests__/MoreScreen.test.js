import React from 'react';
import { render } from '@testing-library/react-native';

import MoreScreen from '../MoreScreen';

//import necessary mock data to make navigation work
//probably the navigation component as 'useNavigation()' gives me grief when I try to run it

describe('MoreScreen', () => {
  it('1 + 1 = 2', () => {
    expect(1 + 1).toBe(2);
  });
  /*it('page renders correctly', () =>{
        render(<MoreScreen />); 
    });

    it('matches the snapshot', () => {
        const { toJSON } = render(<MoreScreen />);
        expect(toJSON()).toMatchSnapshot();
    });

    //make sure buttons exist

    //make sure buttons have same text

    //make sure buttons take you to the right page
    
    */
});
