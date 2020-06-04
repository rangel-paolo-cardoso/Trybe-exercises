import React, {Component} from 'react';
import data from './data';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
    this.toUpper = this.toUpper.bind(this);
  }

  toUpper = (e) => {
    this.setState(({ name: e.target.value.toUpperCase() }));
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
            <input type="text" maxLength="200" required />
          </label>
          <label>Cidade:
            <input type="text" maxLength="28" required />
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
            <textarea name="cargo" maxLength="40" required></textarea>
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