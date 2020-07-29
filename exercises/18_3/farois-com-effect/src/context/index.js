import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const TransitoContext = createContext();

const TransitoProvider = ({ children }) => {
  const [signalColor, setSignal] = useState('red');
  const [cars, setCarsPosition] = useState({
    red: false,
    yellow: false,
    blue: false,
  });
  const contexValue = {
    signalColor,
    setSignal,
    cars,
    setCarsPosition,
  };
  return <TransitoContext.Provider value={contexValue}>{children}</TransitoContext.Provider>;
};

TransitoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TransitoContext, TransitoProvider as Provider };
