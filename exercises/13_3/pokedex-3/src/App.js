import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Pokedex from './componentes/pokedex';
import PokeInfo from './componentes/pokeInfo';
import Header from './componentes/PokeHeader';

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <Route
        path="/pokemon/:pokemonId"
        render={(props) => <PokeInfo {...props} />}
      />
      <Route path="/" component={Pokedex} />
    </Switch>
    </div>
  );
}

export default App;
