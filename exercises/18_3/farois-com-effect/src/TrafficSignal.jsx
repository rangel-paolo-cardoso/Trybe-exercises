import React, { useContext } from 'react';
import { TransitoContext } from './context';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = signalColor => {
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
  const { signalColor, setSignal } = useContext(TransitoContext);
  return (
    <div>
      <div className="button-container">
        <button onClick={() => setSignal('red')} type="button">
          Red
        </button>
        <button onClick={() => setSignal('yellow')} type="button">
          Yellow
        </button>
        <button onClick={() => setSignal('green')} type="button">
          Green
        </button>
      </div>
      <img className="signal" src={renderSignal(signalColor)} alt="Semáforo" />
    </div>
  );
}

export default TrafficSignal;
