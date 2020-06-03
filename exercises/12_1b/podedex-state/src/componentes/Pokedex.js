import React from 'react';
import data from './data';
import Pokemon from './Pokemon';
import Button from './button';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      filterType: 'a',
    };
  }

  filterPokemons(filterType) {
    this.setState({ filterType, index: 0 });
  }

  nextPokemon(numOfPOkemons) {
    this.setState(state => ({
      index: (state.index + 1) % numOfPOkemons,
    }));
  }

  // avancar = () => {
  //   this.setState({ firstPokemon: data[this.state.pos] });
  // };

  // voltar = () => {
  //   this.setState({ firstPokemon: data[this.state.pos] });
  // };

  render () {
    // console.log(this.state.firstPokemon);
    return (
      <div className="poke-body">
        <h1>Pokedex</h1>
        <div>
          <Button txt="Anterior" click={this.incrementIndex} />
          <Button txt="Próximo" click={this.decrementIndex} />
        </div>
        <div className="pokedex">
          {console.log(data.map(p => p === this.state.index))}
          {<Pokemon pokemon={this.state.filterType} />}
        </div>
      </div>
    );
  }
}

export default Pokedex;
