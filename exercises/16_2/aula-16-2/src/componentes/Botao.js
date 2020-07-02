import React, { Component } from 'react';
import { somaClique } from '../actions';
import { connect } from 'react-redux';

class Botao extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.increase()}
      >
        Clique
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(somaClique()),
});

export default connect(null, mapDispatchToProps)(Botao);
