import React, { Component } from 'react';
import './Content.css'

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendido',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprendido'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprendido'
      },
    ];

    return (
      <div className='container'>
        {conteudos.map(({ conteudo, status, bloco }) => (
          <div className='card' key={conteudo}>
            <p>O conteúdo é: {conteudo}</p>
            <p>Status: {status}</p>
            <p>bloco: {bloco}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;