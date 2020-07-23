import React, { Component } from 'react';
import SomaContext from '../TheContext';

class Inputs extends Component {
  render() {
    const {
      botoes: { one, two, three },
      somar,
    } = this.context;
    return (
      <div>
        <p>
          <input id="field1" type="number" name="one" onChange={(e) => somar(e)} />
        </p>
        <p>
          <input id="field2" type="number" name="two" onChange={(e) => somar(e)} />
        </p>
        <p>
          <input id="field3" type="number" name="three" onChange={(e) => somar(e)} />
        </p>
        <p>Soma: {Number(one + two + three)}</p>
      </div>
    );
  }
}

Inputs.contextType = SomaContext;

export default Inputs;
