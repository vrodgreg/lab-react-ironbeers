import React from 'react';
import { Link } from 'react-router-dom'

function Home(props) {
    return (
        <div className="homePage">

            <Link to="./beers">
            <section>
            <img src="./images/beers.png" alt="a lot of beers"/>
            <h1>All Beers</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel velit sollicitudin, tempus sem quis, efficitur libero. Donec porttitor rhoncus posuere. Donec a congue nulla, euismod facilisis ex. Praesent ornare.</p>
            
            </section>
            </Link>

            <Link to="./random-beer">
            <section>
            <img src="./images/random-beer.png" alt="a lot of beers" />
            <h1>Random Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel velit sollicitudin, tempus sem quis, efficitur libero. Donec porttitor rhoncus posuere. Donec a congue nulla, euismod facilisis ex. Praesent ornare.</p>
            </section>
            </Link>

            <Link to="./new-beer">
            <section>
            <img src="./images/new-beer.png" alt="a lot of beers"/>
            <h1>New Beer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel velit sollicitudin, tempus sem quis, efficitur libero. Donec porttitor rhoncus posuere. Donec a congue nulla, euismod facilisis ex. Praesent ornare.</p>
            </section>
            </Link>

        </div>
    );
}

export default Home;