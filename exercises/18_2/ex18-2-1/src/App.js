import React, { Component } from 'react';
import Botao from './componentes/Botao';
import ClickCounter from './componentes/ClickCounter';
import { Provider } from './Context';

class App extends Component {
  render() {
    return (
      <Provider>
        <ClickCounter />
        <Botao />
      </Provider>
    );
  }
}

export default App;
