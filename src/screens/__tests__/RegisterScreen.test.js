import React from 'react';
import { render } from '@testing-library/react-native';

import RegisterScreen from '../RegisterScreen';

describe('Register Screen', () =>{

    //does page render
    it('page renders correectly', () =>{
        render(<RegisterScreen/>); 
     });

    //is snapshot same

    //does the backbutton take you to the login screen

    //does putting in mock data and pressing the button actually register a person

});