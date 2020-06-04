import React, {Component} from 'react';
import data from './data';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      cidade: '',
      alerta: 1,
    };
  }

  toUpper = (e) => { // Transforma nome em UPPERCASE.
    this.setState(({ name: e.target.value.toUpperCase() }));
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

  render() {
    return (
      <form className="my-form">
        <fieldset className="dados-pessoais">
          <legend>Dados Pessoais</legend>
          <label>Nome:
            <input type="text" maxLength="40" 
            value={this.state.name} onChange={this.toUpper} required />
          </label>
          <label>Email:
            <input type="text" maxLength="50" 
            pattern="^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$"
            required />
          </label>
          <label>CPF:
            <input type="text" maxLength="11" required />
          </label>
          <label>Endereço:
            <input type="text" maxLength="200"
            pattern="^([a-zA-Z]|[0-9]|[ ])+$" required />
          </label>
          <label>Cidade:
            <input type="text" maxLength="28" onChange={this.setCity}
            value={this.state.cidade} onBlur={this.verifyCity} required />
          </label>
          <label>Estado:
            <select name="estado" required>
              {data.map((e, i) => (<option key={i}>{e}</option>))}
            </select>
          </label>
          <p>
            Tipo Residência:
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
            <textarea name="cResume" maxLength="1000" required></textarea>
          </label>
          <label>
            Cargo:
            <textarea name="cargo" maxLength="40"
            onMouseEnter={this.alertInField} required></textarea>
          </label>
          <label>
            Descrição do cargo:
            <input type="text" name="cargo-desc" maxLength="500" required />
          </label>
        </fieldset>
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Form;