import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRegister } from '../actions';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      email: '',
    };
  }

  validateRegister = () => {
    const { nome, idade, email } = this.state;
    this.props.addRegister({ nome, idade, email });
    this.setState({
      nome: '',
      idade: '',
      email: '',
    });
  };

  render() {
    const { nome, idade, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={e => this.setState({ nome: e.target.value })}
          />
          <input
            type="number"
            placeholder="Idade"
            value={idade}
            onChange={e => this.setState({ idade: e.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <button onClick={this.validateRegister}>Registrar Cliente</button>
        <Link to="/clientes">Ver clientes cadastrados</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userLogin: state.loginReducer,
});

const mapDispatchToProps = dispatch => ({
  addRegister: e => dispatch(addRegister(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
