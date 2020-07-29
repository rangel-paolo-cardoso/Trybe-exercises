import React from 'react';
import { Provider } from './context';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import './App.css';

const App = () => {
  return (
    <Provider>
      <TrafficSignal />
      <Cars/>
    </Provider>
  );
}

export default App;
