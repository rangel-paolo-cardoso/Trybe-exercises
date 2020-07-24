import React, { useContext } from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { FarolContext } from './FarolContext';
// import { moveCar } from './redux/actionCreators';

const Cars = () => {
  const {
    carros,
    carros: { red, blue, yellow },
    setCarros,
  } = useContext(FarolContext);
  return (
    <div>
      <div>
        <img className={red ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
        <button onClick={() => setCarros({ ...carros, red: !red })} type="button">
          Move
        </button>
      </div>
      <div>
        <img className={blue ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
        <button onClick={() => setCarros({ ...carros, blue: !blue })} type="button">
          Move
        </button>
      </div>
      <div>
        <img className={yellow ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
        <button onClick={() => setCarros({ ...carros, yellow: !yellow })} type="button">
          Move
        </button>
      </div>
    </div>
  );
};

export default Cars;
