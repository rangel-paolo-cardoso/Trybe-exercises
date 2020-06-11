// arquivo Users.js
import React from 'react';

const Users = ({ greetingMessage, match: { params } }) => (
  <div>
    <h2> Users </h2>
    <p>{greetingMessage} user {params.id}, this is my awesome Users component </p>
  </div>
);

export default Users;
