import React, { Component } from 'react';
import Botao from './componentes/Botao';
import ClickCounter from './componentes/ClickCounter';
import Context from './GeneralContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }
  
  increment() {
    this.setState((state) => ({ counter: state.counter + 1 }));
  }

  render() {
    const contextValue = {
      counter: this.state.counter,
      increment: this.increment,
    };
    return (
      <Context.Provider value={contextValue}>
        <div className="App">
          <ClickCounter />
          <Botao />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
