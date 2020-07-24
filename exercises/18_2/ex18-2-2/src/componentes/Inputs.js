import React, { useContext } from 'react';
import { SomaContex } from '../InputsContext';

const Inputs = () => {
  const {
    inputOne,
    setInputOne,
    inputTwo,
    setInputTwo,
    inputThree,
    setInputThree,
  } = useContext(SomaContex);
  return (
    <div>
      <p>
        <input
          id="field1"
          type="number"
          onChange={({ target: { value } }) => setInputOne(Number(value))}
        />
      </p>
      <p>
        <input
          id="field2"
          type="number"
          onChange={({ target: { value } }) => setInputTwo(Number(value))}
        />
      </p>
      <p>
        <input
          id="field3"
          type="number"
          onChange={({ target: { value } }) => setInputThree(Number(value))}
        />
      </p>
      <p>Soma: {inputOne + inputTwo + inputThree}</p>
    </div>
  );
};

export default Inputs;
