import React, { useContext } from 'react';
import { TransitoContext } from './context';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

const Cars = () => {
  const {
    cars,
    cars: { red, yellow, blue },
    setCarsPosition,
  } = useContext(TransitoContext);
  return (
    <div>
      <div>
        <img className={red ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => setCarsPosition({ ...cars, red: !red })} type="button">
          Move
        </button>
      </div>
      <div>
        <img className={blue ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => setCarsPosition({ ...cars, blue: !blue })} type="button">
          Move
        </button>
      </div>
      <div>
        <img className={yellow ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => setCarsPosition({ ...cars, yellow: !yellow })} type="button">
          Move
        </button>
      </div>
    </div>
  );
};

export default Cars;
