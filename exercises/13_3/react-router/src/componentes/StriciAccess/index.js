import React from 'react';
import { Redirect } from 'react-router-dom';

const StrictAccess = ({ user: { username, password } }) => {
  return (username === 'joao' && password === '1234') ?
    <p>Welcome joao!</p> :
    (
      <div>
        {alert('Access danied')}
        <Redirect to="/" />
      </div>
    );
};

export default StrictAccess;
