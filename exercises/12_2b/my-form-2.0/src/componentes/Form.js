import React, {Component} from 'react';
import data from './data';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      resumo: '',
      cargo: '',
      cargoDesc: '',
      alerta: 1,
      visible: true
    };
  }

  toUpper = (e) => { // Transforma nome em UPPERCASE.
    this.setState(({ name: e.target.value.toUpperCase() }));
  };

  setGenField = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    switch(name) {
      case 'email':
        this.setState(({ [name]: val }));
        break;
      case 'cpf':
        this.setState(({ [name]: val }));
        break;
      case 'endereco':
        this.setState(({ [name]: val }));
        break;
      case 'cidade':
        this.setState(({ [name]: val }));
        break;
      case 'resumo':
        this.setState(({ [name]: val }));
        break;
      case 'cargo':
        this.setState(({ [name]: val }));
        break;
      case 'cargoDesc':
        this.setState(({ [name]: val }));
        break;
      default:
        break;
    }
  };

  setCity = (e) => { // Configura campo cidade.
    this.setState(({ cidade: e.target.value }));
  };

  verifyCity = (e) => { // Apaga o campo cidade se começar com número.
    const city = parseInt(e.target.value.trim().split('')[0]);
    if (!isNaN(city)) this.setState(({ cidade: '' }));
  };

  alertInField = () => {
    if (this.state.alerta === 1) {
      alert('Preencha com cuidado esta informação');
      this.setState({ alerta: 0 });
    }
  };

  whenSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="my-form" onSubmit={this.whenSubmit}>
        <fieldset className="dados-pessoais">
          <legend>Dados Pessoais</legend>
          <label>Nome:
            <input type="text" maxLength="40"  name="nome"
            value={this.state.name} onChange={this.toUpper} required />
          </label>
          <label>Email:
            <input type="text" maxLength="50" name="email"
            value={this.state.email} onChange={this.setGenField}
            pattern="^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$"
            required />
          </label>
          <label>CPF:
            <input type="text" name="cpf"
            value={this.state.cpf} onChange={this.setGenField} maxLength="11" required />
          </label>
          <label>Endereço:
            <input type="text" name="endereco"
            value={this.state.endereco} onChange={this.setGenField} maxLength="200"
            pattern="^([a-zA-Z]|[0-9]|[ ])+$" required />
          </label>
          <label>Cidade:
            <input type="text" name="cidade" maxLength="28" onChange={this.setCity}
            value={this.state.cidade} onBlur={this.verifyCity} required />
          </label>
          <label>Estado:
            <select name="estado" required>
              {data.map((e, i) => (<option key={i}>{e}</option>))}
            </select>
          </label>
          <p>
            Tipo Residência:&nbsp;
            <label>
              Apartamaneto
              <input type="radio" name="residence" value="ap" required />
            </label>
            <label>
              Casa
              <input type="radio" name="residence" value="casa" required />
            </label>
          </p>
        </fieldset>
        <fieldset className="dados-pessoais">
          <legend>Último emprego</legend>
          <label>
            Resumo do currículo:
            <textarea name="resumo"
            value={this.state.resumo} onChange={this.setGenField}
            maxLength="1000" required></textarea>
          </label>
          <label>
            Cargo:
            <textarea name="cargo" maxLength="40"
            value={this.state.cargo} onChange={this.setGenField}
            onMouseEnter={this.alertInField} required></textarea>
          </label>
          <label>
            Descrição do cargo:
            <input type="text" name="cargoDesc"
            value={this.state.cargoDesc} onChange={this.setGenField}
            maxLength="500" required />
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
        <input type="reset" value="Limpar" />
      </form>
    );
  }
}

export default Form;