import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clientes extends Component {
  render() {
    const { registers, userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registers.length < 1)
      return (
        <div>
          Nenhum cliente cadastrado
          <Link to="/register">Cadastrar</Link>
        </div>
      );
    return (
      <div>
        <Link to="/register">Cadastre outros!</Link>
        <div>
          {registers.map((register, idx) => {
            return (
              <div key={idx}>
                <p>ID de registro: {idx + 1}</p>
                <p>Nome: {register.nome}</p>
                <p>Idade: {register.idade}</p>
                <p>Email: {register.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registers: state.registerReducer,
  userLogin: state.loginReducer,
});

export default connect(mapStateToProps)(Clientes);
