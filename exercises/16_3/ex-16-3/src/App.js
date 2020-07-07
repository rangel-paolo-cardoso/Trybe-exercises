import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Clientes from './components/Clientes';
import Login from './components/Login';
import Register from './components/Register';

const App = () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/clientes" component={Clientes} />
      <Route path="/register" component={Register} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
