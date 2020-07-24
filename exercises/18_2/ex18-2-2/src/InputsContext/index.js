import React, { createContext, useState } from 'react';

const SomaContex = createContext();

const InputsProvider = ({ children }) => {
  const [inputOne, setInputOne] = useState(0);
  const [inputTwo, setInputTwo] = useState(0);
  const [inputThree, setInputThree] = useState(0);
  const contextValue = {
    inputOne,
    setInputOne,
    inputTwo,
    setInputTwo,
    inputThree,
    setInputThree,
  };
  return (<SomaContex.Provider value={contextValue}>{children}</SomaContex.Provider>);
};

export { SomaContex, InputsProvider as Provider };
