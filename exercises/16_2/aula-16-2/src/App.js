import React from 'react';
import { Provider } from 'react-redux';
import Botao from './componentes/Botao';
import store from './store';
import ClickCounter from './componentes/ClickCounter';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ClickCounter />
        <Botao />
      </Provider>
    </div>
  );
}

export default App;
