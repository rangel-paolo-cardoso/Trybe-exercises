import React, { useContext } from 'react';
import { Context } from '../Context';

const Botao = () => {
  const { counter, setCounter } = useContext(Context);
  return <button onClick={() => setCounter(counter + 1)}>Clique</button>;
};

export default Botao;
