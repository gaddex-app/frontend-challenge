import React from 'react';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';

export const SideBarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiFillHome />,
      cName: 'nav-text' 
    },
    {
      title: 'Search',
      path: '/search',
      icon: <AiOutlineSearch />,
      cName: 'nav-text' 
    }
]