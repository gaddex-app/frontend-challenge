import React from 'react';
import SongList from '../list/SongList';
import {screen, render} from '@testing-library/react';

const Singles = [{
        id: 1,
        name: 'Generic',
        external_urls: {spotify: 'https://www.spotify.com'},
        images : [
            {url: 'https://picsum.photos/200'}
        ], 
    },
    {
        id: 2,
        name: 'Generic',
        external_urls: {spotify: 'https://www.spotify.com'},
        images : [
            {url: 'https://picsum.photos/200'}
        ], 
    },
    {
        id: 3,
        name: 'Generic',
        external_urls: {spotify: 'https://www.spotify.com'},
        images : [
            {url: 'https://picsum.photos/200'}
        ], 
    },
]

describe('SongList', () =>{
    it('must render a SongList component', () => {
        render(<SongList singles={Singles} />)
    })
})
