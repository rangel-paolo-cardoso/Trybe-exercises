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
      this.setState((state) => 
        ({ index: state.index + 1 })
      );
      // this.setState({ filterType: data[this.state.index] });
      // this.nexPok();
    }
  }

  render () {
    console.log(this.state.index);
    console.log(data.length);
    return (
      <div className="poke-body">
        <h1>Pokedex</h1>
        <div>
          <button onClick={this.indexIncrement}>Avançar</button>
        </div>
        <div className="pokedex">
          {<Pokemon pokemon={data[this.state.index]} />}
        </div>
      </div>
    );
  }
}

export default Pokedex;