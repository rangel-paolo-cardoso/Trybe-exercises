import React from 'react';
import { somaValor1, somaValor2, somaValor3 } from '../actions';
import { connect } from 'react-redux';

const Inputs = ({ calcular1, calcular2, calcular3, somaInputUmReducer, somaInputDoisReducer, somaInputTresReducer }) => {
  return (
    <div>
      <p>
        <input
          id="field1"
          type="number"
          onChange={(e) => calcular1(e.target.value, e.target.id)}
        />
      </p>
      <p>
        <input
          id="field2"
          type="number"
          onChange={(e) => calcular2(e.target.value, e.target.id)}
        />
      </p>
      <p>
        <input
          id="field3"
          type="number"
          onChange={(e) => calcular3(e.target.value, e.target.id)}
        />
      </p>
      <p>Soma: {somaInputUmReducer + somaInputDoisReducer + somaInputTresReducer}</p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  calcular1: valor => dispatch(somaValor1(valor)),
  calcular2: valor => dispatch(somaValor2(valor)),
  calcular3: valor => dispatch(somaValor3(valor)),
});

const mapStateToProps = state => ({
  somaInputUmReducer: state.somaInputUmReducer,
  somaInputDoisReducer: state.somaInputDoisReducer,
  somaInputTresReducer: state.somaInputTresReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Inputs);
