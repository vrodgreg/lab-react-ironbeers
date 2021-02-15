import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function NewBeer(props) {

    const [data, setData] = useState({});

    function submitForm(e) {
        e.preventDefault();

        axios
          .post('https://ih-beers-api2.herokuapp.com/beers/new', data)
          .then((resp) => {
              console.log('response', resp);
          });
    }

    function updateForm(e, t) {
        setData({...data, [e.target.id]: e.target.value });
    }
  console.log('Data is', data)

  return (
    <div className="newBeer">
      <Link to="./">
        <header>
          <img src="./images/home-icon.png" width="50" alt="little home icon" />
        </header>
      </Link>

      <h3>Add New Beer to Database</h3>

      <form onSubmit={submitForm}>
        <label>Beer Name</label>
           <input type="text" size="30" id="name" onChange={updateForm} />
        
        <label>Tagline</label>
          <input type="text" size="30" id="tagline" onChange={updateForm}/>
        
        <label>Description</label>
          <textarea id="description" wrap="soft" onChange={updateForm}></textarea>
        
        <label>First Brewed</label>
          <input type="text" size="30" id="first_brewed" onChange={updateForm}/>
        
        <label>Brewer's Tips</label>
          <input type="text" size="30" id="brewers_tips" onChange={updateForm}/>
       
        <label>Attenuation Level</label>
          <input type="number" size="30" id="attentuation_level" onChange={updateForm}/>
        
        <label>Contributed By</label>
          <input type="text" size="30" id="contributed_by" onChange={updateForm}/>
        
        {/* <label>URL of Beer Photo</label>
          <input type="url" size="30" id="image_url" onChange={updateForm}/> */}
        
          <input className="submitButton" type="submit" value="Submit" />
      </form>
    </div>
  );
}
        
export default NewBeer;
