import React, { useState } from 'react';

const Name = ({ name, onNameChange }) => (
  <div>
    <label htmlFor="name">Name: </label>
    <input id="name" value={name} onChange={onNameChange} />
  </div>
);

const FavoriteAnimal = ({ animal, onAnimalChange }) => (
  <div>
    <label htmlFor="animal">Favorite Animal: </label>
    <input id="animal" value={animal} onChange={(event) => onAnimalChange(event.target.value)} />
  </div>
);

const Display = ({ name, animal }) => (
  <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
);

const App = () => {
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  return (
    <form>
      <Name name={name} onNameChange={(event) => setName(event.target.value)} />
      <FavoriteAnimal animal={animal} onAnimalChange={setAnimal} />
      <Display name={name} animal={animal} />
    </form>
  );
};

export default App;
