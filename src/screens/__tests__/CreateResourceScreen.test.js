import React from 'react';
import { render } from '@testing-library/react-native';

import CreateResourceScreen from '../CreateResourceScreen';
/*
jest.mock('../../contexts/UserContext.js', () => ({
    __esModule: true,
    useUserContext: jest.fn(() => ({
      state: {
        // Mocked user data
        userID: 1,
        userData: {
          id: 1,
          first: 'John',
          last: 'Doe',
          email: 'john.doe@example.com',
        },
      },
      // Mocked function
      dispatch: jest.fn(),
    })),
  })); */

describe('CreateResource Screen', () =>{

    //page renders
    it('page renders correctly', () =>{
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