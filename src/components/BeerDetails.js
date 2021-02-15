import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

function BeerDetails(props) {

  let beerId = props.match.params.id;

  let [beers, setBeers] = useState(['🌭'])

  useEffect(() => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          .then(res => {
              setBeers(res.data)
          })
  }, [])

  return (
    <div>
      <Link to="/">
        <header>
          <img src="/images/home-icon.png" width="50" alt="little home icon" />
        </header>
      </Link>
      <div className="beerDetails">
          <img src={beers.image_url} alt="beer" />
          <section>
            <h1>{beers.name}</h1>
            <h1>{beers.attenuation_level}</h1>
          </section>
          <section>
            <h4>{beers.tagline}</h4>
            <h4><b>{beers.first_brewed}</b></h4>
          </section>
          <p>{beers.description}</p>
          <p>{beers.contributed_by}</p>
      </div>
    </div>
  );
}

export default BeerDetails;
