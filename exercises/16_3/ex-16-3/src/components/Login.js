import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { login } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }

  render() {
    const { email, senha } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="usrName">Email: </label>
          <input
            id="usrName"
            name="email"
            type="text"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <br />
          <label htmlFor="usrEmail">Senha: </label>
          <input
            id="usrEmail"
            name="senha"
            type="password"
            value={senha}
            onChange={e => this.setState({ senha: e.target.value })}
          />
        </div>
        <Link
          to="/clientes"
          onClick={() => this.props.login({ email, senha })}
        >
          Entre
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: e => dispatch(login(e)),
});

export default connect(null, mapDispatchToProps)(Login);
