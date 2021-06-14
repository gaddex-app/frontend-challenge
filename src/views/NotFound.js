import React from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

export default function NotFound () {
    return (
        <div className="notFoundWrapper">
            <div className="not-found">
                <h1>Sorry...</h1>
                <h2 className="fontRed">404: Page not found</h2>
                <Link to="/">Go to home</Link>
            </div>
        </div>
    )
}
