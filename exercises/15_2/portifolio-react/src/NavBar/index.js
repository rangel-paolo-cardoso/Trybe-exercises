import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Minhas informações</Link>
          </li>
          <li>
            <Link to="/habilities">Principais habilidades</Link>
          </li>
          <li>
            <Link to="/portfolio">Portifólio - uma pequena amostra</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;