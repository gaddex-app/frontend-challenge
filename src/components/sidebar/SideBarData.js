import React from 'react';
import { AiFillHome, AiOutlineSearch, AiOutlineHeart, AiOutlinePlayCircle } from 'react-icons/ai';
import { VscListSelection } from 'react-icons/vsc';
export const SideBarData = [
    {
      title: 'Discover',
      path: '/',
      icon: <AiFillHome />,
      cName: 'nav-text' 
    },
    {
      title: 'Search',
      path: '/search',
      icon: <AiOutlineSearch />,
      cName: 'nav-text' 
    },
    {
      title: 'Favorites',
      path: '/favorites',
      icon: <AiOutlineHeart />,
      cName: 'nav-text' 
    },
    {
      title: 'Playlists',
      path: '/playlists',
      icon: <AiOutlinePlayCircle />,
      cName: 'nav-text' 
    },
    {
      title: 'Charts',
      path: '/charts',
      icon: <VscListSelection />,
      cName: 'nav-text' 
    },
]