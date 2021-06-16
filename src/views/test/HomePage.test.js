import React from 'react';
import HomePage from '../HomePage';
import {screen, render} from '@testing-library/react';

describe('HomePage', () =>{
    it('Checks Homepage', () => {
        render(<HomePage/>) //Checks HomePage
        expect(screen.getByText(/Blouse/i)).toBeInTheDocument(); //Checks Player element
    })
});




