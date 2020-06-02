import React from 'react';
import data from './data'
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render () {
    return (
      <div className="poke-body">
        <h1>Pokedex</h1>
        <div className="pokedex">
          {data.map((pk, i) => <Pokemon key={i} pokemon={pk} />)}
        </div>
      </div>
    );
  }
}

export default Pokedex;