import React, { Component } from 'react';
import Context from '../GeneralContext';

class Botao extends Component {
  render() {
    const { increment } = this.context;
    return <button onClick={() => increment()}>Clique</button>;
  }
}

Botao.contextType = Context;

export default Botao;
