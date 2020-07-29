import React, { useState } from 'react'

const Greeting = () => {
  const [name, setName] = useState('');

  const handleChange = ({ target: { value } }) => setName(value);

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={(e) => handleChange(e)} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
};

const App = () => <Greeting />;

export default App