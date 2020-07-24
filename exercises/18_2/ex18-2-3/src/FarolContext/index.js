import React, { createContext, useState } from 'react';

const FarolContext = createContext();

const FarolProvider = ({ children }) => {
  const [signalColor, setSignalColor] = useState('red');
  const contextValue = {
    signalColor,
    setSignalColor,
  };
  return <FarolContext.Provider value={contextValue}>{children}</FarolContext.Provider>;
};

export { FarolContext, FarolProvider as Provider };
