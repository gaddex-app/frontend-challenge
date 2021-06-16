import React from 'react';

export default function Card (props) { //Used to map Categories

    const id = props.id;
    const image = props.image;
    const name = props.name;

    return(
        <div className="my-card" id={id}>
        <img className="img-card" src={image} alt="categories" />
        <p className="card-text">{name}</p>
        </div>
    )
}