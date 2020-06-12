import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const PokeInfo = ({
  match: {
    params: { pokemonId },
  },
}) => {
  const {
    name,
    type,
    averageWeight: { value, measurementUnit },
    image,
    summary,
    foundAt,
  } = data.filter((poke) => poke.id === parseInt(pokemonId))[0];
  return (
    <div className="pokemon-info">
      <h1>Nome: {name}</h1>
      <p>Type: {type}</p>
      <p>Average Weight: {value} {measurementUnit}</p>
      <img src={image} alt={name} />
      <p>Summary: {summary}</p>
      <div className="location">
        <p>Found At:</p>
        {foundAt.map((loc) => (
          <img className="mapa" src={loc.map} alt={loc.location} />)
        )}
      </div>
      <Link className="more-info" to="/">Voltar</Link>
    </div>
  );
};

export default PokeInfo;
