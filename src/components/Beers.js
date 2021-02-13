import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

function Beers(props) {


    let [beers, setBeers] = useState(['🌭'])

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/')
            .then(res => {
                console.log(res)
                setBeers(res.data)
            })
    }, [])

    const showBeers = () => {
        return beers.map(eachBeer => {
            console.log(eachBeer._id)
            return (
                <Link to={`/beers/${eachBeer._id}`}>
                <div className="beerDiv">
                    <section className="beerImgSection">
                    <img src={eachBeer.image_url} height="150" alt="beer bottle or keg"/>
                    </section>
                    <section className="beerDetailSection">
                    <p>{eachBeer.name}</p>
                    <p>{eachBeer.tagline}</p>
                    <p>Created by: {eachBeer.contributed_by}</p>
                    </section>
                </div>
                </Link>
            )
        })
    }

    return (
        <div>
        <Link to="./">
        <header>
            <img src='./images/home-icon.png' width="50" alt="little home icon"/>
        </header>
        </Link>
        {showBeers()}
            
        </div>
    );
}

export default Beers;