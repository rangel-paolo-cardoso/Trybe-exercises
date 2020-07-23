import React, { Component } from 'react';
import Inputs from './componentes/Inputs';
import SomaContext from './TheContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: { one: 0, two: 0, three: 0 },
    };
    this.somatorio = this.somatorio.bind(this);
  }

  somatorio({ target: { name } }) {
    this.setState((state) => ({ buttons: { ...state.buttons, [name]: state.buttons[name] + 1 } }));
  }

  render() {
    const contexValue = {
      botoes: { ...this.state.buttons },
      somar: this.somatorio,
    };

    return (
      <SomaContext.Provider value={contexValue}>
        <div className="App">
          <Inputs />
        </div>
      </SomaContext.Provider>
    );
  }
}

export default App;
