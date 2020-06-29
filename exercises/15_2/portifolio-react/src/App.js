import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MyInfo from './MyInfo';
import Habilidades from './Habilidades';
import Portfolio from './Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 data-testid="main-title">Índice</h1>
      <NavBar />
      <Switch>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/habilities" component={Habilidades} />
        <Route path="/" component={MyInfo} />
      </Switch>
    </div>
  );
}

export default App;
