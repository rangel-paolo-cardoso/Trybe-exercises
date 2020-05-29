import React from 'react';
import './App.css';
import data from './data';
import Pokemon from './Pokemon';

class App extends React.Component {
  render () {
    return (
      data.map(pk=> <Pokemon key={pk.id} pokemon={pk} />)
    );
  }
}

export default App;
