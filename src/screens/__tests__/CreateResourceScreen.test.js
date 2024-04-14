import React from 'react';
import { render } from '@testing-library/react-native';

import CreateResourceScreen from '../CreateResourceScreen';

describe('CreateResource Screen', () =>{

    //page renders
    it('page renders correectly', () =>{
        render(<CreateResourceScreen/>); 
     });
 
     //is not changing between loads
     it('matches the snapshot', () => {
         const { toJSON } = render(<CreateResourceScreen />);
         expect(toJSON()).toMatchSnapshot();
       });
 
     //title matches
     it('text is the same', () =>{
         const {getByText} = render(<CreateResourceScreen/>);
         const title = getByText(/Create Resource/);
         expect(title).toBeTruthy();
     });
});