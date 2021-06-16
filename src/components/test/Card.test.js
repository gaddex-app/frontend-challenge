import React from 'react';
import Card from '../cards/Card';
import {screen, render} from '@testing-library/react';

const card = [{
    id: 1,
    name: 'name',
    image: 'https://picsum.photos/200',
  }];

describe('Card', () =>{
    it('must render a card component', () => {
        render(<Card id ={card.id} image= {card.image} name= {card.name}/>)
    })
})
