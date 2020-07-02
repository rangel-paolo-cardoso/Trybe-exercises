import React from 'react';
import { Provider } from 'react-redux';
import Inputs from './componentes/Inputs';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Inputs />
      </Provider>
    </div>
  );
}

export default App;
