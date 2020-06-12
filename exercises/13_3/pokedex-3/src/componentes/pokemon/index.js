import React, { Component } from 'react';

class Pokemon extends Component {
  render () {
    const { name, type,
      averageWeight: { value, measurementUnit },
      image
    } = this.props.pokemon;
    return (
      <div className="pokemon">
        <h1>Nome: {name}</h1>
        <p>Tipo: {type}</p>
        <p>Peso médio: {value} {measurementUnit}</p>
        <img src={image} alt={name} />
      </div>
    );
  }
}

export default Pokemon;