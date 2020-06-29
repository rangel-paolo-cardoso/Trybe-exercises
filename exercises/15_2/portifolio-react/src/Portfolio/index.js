import React, { Component } from 'react';

class Portfolio extends Component {
  renderPortLinks() {
    return (
      <ul class="general" id="portfolio">
        <li>
          <em>
            <a href="https://rangel20.github.io/exercises/11_2_MovieCardLibrary/index.html">
              Movie Card Library
            </a>
          </em>
        </li>
        <li>
          <em>
            <a href="https://rangel20.github.io/exercises/10_0_ShopCart1/index.html">
              Carrinho de Compras
            </a>
          </em>
        </li>
        <li>
          <em>
            <a href="https://rangel20.github.io/exercises/7_4_OProfetaDiario/index.html">
              O Profeta Diário
            </a>
          </em>
        </li>
        <li>
          <em>
            <a href="https://rangel20.github.io/exercises/6_5_facebookHome/index.html">
              Facebook Home Page
            </a>
          </em>
        </li>
        <li>
          <em>
            <a href="https://rangel20.github.io/exercises/5_1_cartaMisteriosa/index.html">
              Carta Misteriosa
            </a>
          </em>
        </li>
        <li>
          <em>
            <a href="https://rangel20.github.io/exercises/5_1_adivinheACor/index.html">
              Adivinhe a Cor
            </a>
          </em>
        </li>
        <li>
          <em>
            <a href="https://rangel20.github.io/exercises/5_1_listaDeTarefas/index.html">
              Lista de Tarefas
            </a>
          </em>
        </li>
        <li>
          <em>
            <a href="https://rangel20.github.io/exercises/5_1_arte_com_pixels/index.html">
              Pixels Art
            </a>
          </em>
        </li>
        <li>
          <em>
            <a href="https://rangel20.github.io/exercises/5_1_gerador_de_memes/index.html">
              Gerador de Memes
            </a>
          </em>
        </li>
        <li>
          <em>
            <a href="https://rangel20.github.io/exercises/3_4_projeto-bloco-3/index.html">
              Projeto Block3
            </a>
          </em>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Portfólio</h1>
        {this.renderPortLinks()}
      </div>
    );
  }
}

export default Portfolio;
