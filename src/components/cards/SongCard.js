import React from 'react';

export default function SongCard (props) { //Used to map songs or playlists
    const {singles} = props;

    return(
        <div className="my-card" id={singles.id}>
        <img className="img-card" src={singles.images[0].url} alt="songs" />
        <p className="card-text">{singles.name}</p>
        </div>
    )
}