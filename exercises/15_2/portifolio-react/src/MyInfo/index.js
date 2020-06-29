import React, { Component } from 'react';

class MyInfo extends Component {
  render() {
    return (
      <div>
        <img
          src="https://rangel20.github.io/images/rangel_big.jpg"
          alt="Foto de Rangel Paolo"
        />
        <div>
          <p>
            <span>Paixão:</span> tecnologia e programação.
            <span>Onde mora:</span> cidade e estado de São Paulo.
            <span>Formação:</span> Análise e Desenvolvimento de Sistemas.
            <span>Nacionalidade:</span> brasileiro nativo.
            <span>O que faz:</span> estuda Desenvolvimento de Software na
            <span> <a href="https://www.betrybe.com/" target="_blank">Trybe</a></span>.
          </p>
        </div>
      </div>
    );
  }
}

export default MyInfo;