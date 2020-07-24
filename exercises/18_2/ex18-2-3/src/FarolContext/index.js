import React, { createContext, useState } from 'react';

const FarolContext = createContext();

const FarolProvider = ({ children }) => {
  const [signalColor, setSignalColor] = useState('red');
  const defaultCars = { red: false, blue: false,yellow: false };
  const [carros, setCarros] = useState(defaultCars);
  const contextValue = {
    signalColor,
    setSignalColor,
    carros,
    setCarros,
  };
  return <FarolContext.Provider value={contextValue}>{children}</FarolContext.Provider>;
};

export { FarolContext, FarolProvider as Provider };
