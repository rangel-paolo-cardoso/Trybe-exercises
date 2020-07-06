import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" component={Home} />
        <Route to="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
