import React from 'react';
import { connect } from 'react-redux';
import { CHANGE_VAL_FIELD } from '../actions';

const Login = ({ onChange, nameValue, emailValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="usrName">Nome: </label>
      <input
        id="usrName"
        name="nome"
        type="text"
        value={nameValue}
        onChange={({ target: { name, value } }) => onChange(name, value)}
      />
      <br />
      <label htmlFor="usrEmail">Email: </label>
      <input
        id="usrEmail"
        name="email"
        type="password"
        value={emailValue}
        onChange={({ target: { name, value } }) => onChange(name, value)}
      />
      <br />
      <button type="submit">
        Fazer login
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  nameValue: state.nome,
  emailValue: state.email,
});

const mapDispatchToProps = dispatch => ({
  onChange: (field, value) => dispatch(CHANGE_VAL_FIELD(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
