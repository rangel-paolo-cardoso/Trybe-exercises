import React, { Component } from 'react';
import data from '../data';
import Pokemon from '../pokemon';
import { Link } from 'react-router-dom';

class Pokedex extends Component {
  render () {
    return (
      <div className="page">
        <div className="pokedex">
          {data.map((pk, i) => (
            <div className="info">
              <Pokemon key={i} pokemon={pk} />
              <Link
                className="more-info"
                to={`/pokemon/${pk.id}`}
              >
                More Info
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;