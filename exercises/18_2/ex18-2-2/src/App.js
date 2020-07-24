import React from 'react';
import Inputs from './componentes/Inputs';
import { Provider } from './InputsContext';

const App = () => {
  return (
    <Provider>
      <Inputs />
    </Provider>
  );
};

export default App;
