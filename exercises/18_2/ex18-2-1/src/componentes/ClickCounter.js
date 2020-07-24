import React, { useContext } from 'react';
import { Context } from '../Context';

const ClickCounter = () => {
  const { counter } = useContext(Context);
  return (
    <div>
      <p>
        Número de cliques: <span>{counter}</span>
      </p>
    </div>
  );
};

export default ClickCounter;
