import React, { Component } from 'react';
import Context from '../GeneralContext';

class ClickCounter extends Component {
  render() {
    const { counter } = this.context;
    return (
      <div>
        <p>
          Número de cliques: <span>{counter}</span>
        </p>
      </div>
    );
  }
}

ClickCounter.contextType = Context;

export default ClickCounter;
