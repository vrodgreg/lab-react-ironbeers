import React from 'react';
import Axios from 'axios'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import BeerDetails from './components/BeerDetails'
import './App.css';

function App() {
  return (

    <div className="App">
      {/* <Home /> */}
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/beers" render={(props) => <Beers {...props} />} />
        <Route exact path="/beers/:id" render={(props) => <BeerDetails {...props} />} />
        <Route exact path="/random-beer" render={(props) => <RandomBeer {...props} />} />
        <Route exact path="/new-beer" render={(props) => <NewBeer {...props} />} />
      </Switch>



    </div>
  );
}

export default App;
