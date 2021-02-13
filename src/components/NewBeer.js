import React from 'react';
import { Link } from 'react-router-dom'

function NewBeer(props) {
    return (
        <div>
        <Link to="./">
            <header>
            <img src='./images/home-icon.png' width="50" alt="little home icon"/>
            </header>
        </Link>
        </div>
    );
}

export default NewBeer;