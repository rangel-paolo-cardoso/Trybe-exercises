import React, { createContext, useState } from 'react';

const Context = createContext();

const ClickProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const contextValue = {
    counter,
    setCounter,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { Context, ClickProvider as Provider };
