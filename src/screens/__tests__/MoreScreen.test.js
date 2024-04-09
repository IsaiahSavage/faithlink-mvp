import React from 'react';
import { render } from '@testing-library/react-native';
import MoreScreen from '../MoreScreen';


//import necessary mock data to make navigation work
//probably the button component


describe('More Screen',() =>{

    it('page renders correctly', () =>{
        render(<MoreScreen />); 
    });

    it('matches the snapshot', () => {
        const { toJSON } = render(<MoreScreen />);
        expect(toJSON()).toMatchSnapshot();
    });

    /*it('buttons exist',()=>{
        const { getByTestId } = render(<MoreScreen />);
        const FlatList = getByTestId('FlatList');
        expect(FlatList).toBeTruthy();
    });*/
});