import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Bem-vindo ao sistema de cadastramento!</h1>
    <Link to="/login">Faça seu Login</Link>
  </div>
);

export default Home;
