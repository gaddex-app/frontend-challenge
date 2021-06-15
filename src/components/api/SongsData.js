import { useState, useEffect } from 'react';
import axios from 'axios';
import { Credentials } from '../../credentials/Credentials';
import SongList from '../../components/list/SongList';
import CategoriesList from '../../components/list/CategoriesList';   
import SectionInfo from '../../components/homepage/SectionInfo';
import {getNewReleased, getFeatured, getCategories} from './ApiCalls';

const SongsData  = () => {
    const spotify = Credentials();

    const [token, setToken] = useState('');
    const [singles, setSingles] = useState([]);
    const [featuredPlayL, setFeaturedPlayL] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios('https://accounts.spotify.com/api/token', {
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)      
            },
            data: 'grant_type=client_credentials',
            method: 'POST'
        })
        .then(tokenResponse => {
            console.log(tokenResponse.data.access_token);
            setToken(tokenResponse.data.access_token);
            
            axios.all([
                getNewReleased(token), getFeatured(token), getCategories (token)
              ])
              .then(axios.spread((newReleases, featuredPlaylists, categories) => {
                // output of req.
                setSingles(newReleases.data.albums.items);
                setFeaturedPlayL(featuredPlaylists.data.playlists.items);
                setCategories(categories.data.categories.items);
              }));
            
        })
    }, []);

    return (
            <div className="songsWrapper">
                <SectionInfo title={'Releases this week'}/>
                    <SongList singles ={singles} />
                <SectionInfo title={'Featured playlists'}/>
                    <SongList singles ={featuredPlayL} />
                <SectionInfo title={'Browse'}/> 
                    <CategoriesList categories={categories} />
            </div>
    )
}

export default SongsData;