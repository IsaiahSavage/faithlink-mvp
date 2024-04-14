import React from 'react';
import { render } from '@testing-library/react-native';

import ResourcesScreen from '../ResourcesScreen';

describe('Resources Screen', () =>{

    //does page render
    it('page renders correectly', () =>{
        render(<ResourcesScreen/>); 
     });

    //is snapshot same

    //Can input be put into the top bar

    //does clicking on each of the 'articles' 'videos' etc buttons actually take you to the search page

    //bottom righthand button should take you to createResourceScreen

    //selecting the 'featured resource' on the front page should send you to the featured resource

});