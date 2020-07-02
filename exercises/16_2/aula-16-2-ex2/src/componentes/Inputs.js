import React from 'react';
import { somaValor } from '../actions';
import { connect } from 'react-redux';

const Inputs = ({ calcular, counter }) => {
  return (
    <div>
      <p>
        <input
          id="field1"
          type="number"
          onChange={(e) => calcular(e.target.value, e.target.id)}
        />
      </p>
      <p>
        <input
          id="field2"
          type="number"
          onChange={(e) => calcular(e.target.value, e.target.id)}
        />
      </p>
      <p>
        <input
          id="field3"
          type="number"
          onChange={(e) => calcular(e.target.value, e.target.id)}
        />
      </p>
      <p>Soma: {counter}</p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  calcular: valor => dispatch(somaValor(valor)),
});

const mapStateToProps = state => ({
  counter: state,
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
