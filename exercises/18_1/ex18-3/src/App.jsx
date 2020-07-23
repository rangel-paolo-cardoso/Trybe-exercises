import React, { Component } from 'react';
// import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import './App.css';

import Context from './ContextStreet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signal: {
        color: 'red',
      },
      cars: {
        red: false,
        yellow: false,
        blue: false,
      }
    };
    this.changeSignal = this.changeSignal.bind(this);
    this.moveCar = this.moveCar.bind(this);
  }

  changeSignal() {}

  moveCar(car, side) {
    this.setState((state) => ({ cars: { ...state.cars, [car]: side } }));
  }

  render() {
    const contextValue = {
      ...this.state,
      changeSignal: this.changeSignal,
      moveCar: this.moveCar,
    };
    return (
      <Context.Provider value={contextValue}>
        <div>
          oi
          {/* <TrafficSignal /> */}
          <Cars />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
