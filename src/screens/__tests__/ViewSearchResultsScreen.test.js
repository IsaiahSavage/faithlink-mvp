import React from 'react';
import { render } from '@testing-library/react-native';

import ViewSearchResultsScreen from '../ViewSearchResultsScreen';

describe('View Search Results Screen', () =>{

    //does page render
    it('page renders correectly', () =>{
        render(<ViewSearchResultsScreen/>); 
     });

    //is snapshot same

    //does the word in the search bar match the word in 'Search results for ____'

    //if there is a resource, does the searched for string match any part of the title of the resource

    //can you swipe and get back to the resources page

});