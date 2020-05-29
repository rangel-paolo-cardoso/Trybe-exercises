import React from 'react';
import logo from './logo.svg';
import './App.css';

const compromissos = ['Estudar JS', 'Estudar React', 'Estudar Codecademy',
'Estudar CS50', 'Estudar Math', 'Estudar Biologia', 'Estudar Química'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Rangel</h1>
        <h2>Lista de tarefas</h2>
        <p>
          {compromissos.map(item => task(item))}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
