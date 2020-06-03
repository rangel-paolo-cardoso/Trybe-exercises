import React from 'react';
import data from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      filterType: data[0],
    };
  }

  nexPok = () =>
    this.setState({ filterType: data[this.state.index] });
  
  indexIncrement = () => {
    if (this.state.index < data.length - 1) {
      this.setState({ index: this.state.index + 1 });
      // this.setState({ filterType: data[this.state.index] });
      this.nexPok();
      console.log(this.state.index);
    }
  }

  indexDecrement = () => {
    if (this.state.index > 0) {
      this.setState({ index: this.state.index - 1 });
      // this.setState({ filterType: data[this.state.index] });
      this.nexPok();
      console.log(this.state.index);
    }
  }

  render () {
    return (
      <div className="poke-body">
        <h1>Pokedex</h1>
        <div>
          <button onClick={this.indexDecrement}>Voltar</button>
          <button onClick={this.indexIncrement}>Avançar</button>
        </div>
        <div className="pokedex">
          {<Pokemon pokemon={this.state.filterType} />}
        </div>
      </div>
    );
  }
}

export default Pokedex;