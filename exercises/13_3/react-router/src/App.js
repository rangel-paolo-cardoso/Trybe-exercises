import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './componentes/Home';
import About from './componentes/About';
import Users from './componentes/Users';
import StrictAccess from './componentes/StriciAccess';

const user = {
  username: 'joao',
  password: '1234',
};

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/strict-access">Strict Acess</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/users/:id"
          render={(props) => (
            <Users {...props} greetingMessage="Good Morning" />
          )}
        />
        <Route
          path="/users"
          render={(props) => <StrictAccess {...props} user={user} />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
