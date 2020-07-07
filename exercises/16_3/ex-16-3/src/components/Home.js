import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    Bem-vindo ao sistema de cadastramento!
    <Link to="/login">Faça seu Login</Link>
  </div>
);

export default Home;
