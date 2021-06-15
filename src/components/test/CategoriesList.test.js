import React from 'react';
import CategoriesList from '../list/CategoriesList';
import {screen, render} from '@testing-library/react';

const categories = [{
        id: 1,
        name: 'Generic',
        href: 'https://www.google.es',
        icons : [
        'https://picsum.photos/200'
        ], 
    },
    {
        id: 2,
        name: 'Generic',
        href: 'https://www.google.es',
        icons : [
        'https://picsum.photos/200'
        ], 
    },
    {
        id: 3,
        name: 'Generic',
        href: 'https://www.google.es',
        icons : [
        'https://picsum.photos/200'
        ], 
    },
]

describe('CategoriesList', () =>{
    it('must render a CategoriesList component', () => {
        render(<CategoriesList categories={categories} />)
    })
})
