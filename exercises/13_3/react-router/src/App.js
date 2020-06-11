import React from 'react';
import { Link, Route } from 'react-router-dom';
import Home from './componentes/Home';
import About from './componentes/About';
import Users from './componentes/Users';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </nav>
      <Route path="/about" component={About} />
      <Route path="/users" component={Users} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
