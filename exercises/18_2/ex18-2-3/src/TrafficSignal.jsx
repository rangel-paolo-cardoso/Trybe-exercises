import React, { useContext } from 'react';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import { FarolContext } from './FarolContext';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') {
    return redSignal;
  }
  if (signalColor === 'green') {
    return greenSignal;
  }
  if (signalColor === 'yellow') {
    return yellowSignal;
  }
  return null;
};

const TrafficSignal = () => {
  const { signalColor, setSignalColor } = useContext(FarolContext);
  console.log(useContext(FarolContext));
  return (
    <div>
      <div className="button-container">
        <button onClick={() => setSignalColor('red')} type="button">
          Red
        </button>
        <button onClick={() => setSignalColor('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => setSignalColor('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="Semáforo" />
    </div>
  );
};

export default TrafficSignal;