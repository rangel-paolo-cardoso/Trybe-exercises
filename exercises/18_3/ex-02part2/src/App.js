import React, { useState, useEffect } from 'react';

const Greeting = ({ initialName = '' }) => {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  const [name, setName] = useState(localStorage.getItem('name') || initialName);

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  const handleChange = (event) => setName(event.target.value);

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
};

const App = () => <Greeting />;

export default App;
