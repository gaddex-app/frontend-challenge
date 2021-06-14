import React from 'react';

export default function CategoriesCard (props) { //Used to map Categories
    const {categories} = props;

    return(
        <div className="my-card" id={categories.id}>
        <img className="img-card" src={categories.icons[0].url} alt="categories" />
        <p className="card-text">{categories.name}</p>
        </div>
    )
}