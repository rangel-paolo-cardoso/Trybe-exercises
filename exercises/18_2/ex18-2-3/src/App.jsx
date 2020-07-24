import React from 'react';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import { Provider } from './FarolContext';
import './App.css';

const App = () => {
  return (
    <Provider>
      <TrafficSignal />
      <Cars/>
    </Provider>
  );
};

export default App;
