import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from  'react-icons/fa';
import { IconContext } from 'react-icons';

import {SideBarData} from './SideBarData';

import './Sidebar.css';

export default function Sidebar(){
    const [sidebar, setSideBar] = useState(false);

    const showSidebar = () => setSideBar(!sidebar);
    return (
        <>
         <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaBars onClick={showSidebar} />
            </Link>
            </div>   
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiOutlineClose />
                        </Link>   
                    </li>      
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span> {item.title} </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
         </IconContext.Provider>
        </>
    )
}