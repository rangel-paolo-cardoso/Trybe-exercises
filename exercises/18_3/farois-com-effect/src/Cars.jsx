import React from 'react';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
import { moveCar } from './redux/actionCreators';
import { connect } from 'react-redux';

const Cars = ({ redCar, blueCar, yellowCar, moveCar }) => (
  <div>
    <div>
      <img className={redCar ? 'car-right' : 'car-left'} src={carRed} alt="red car" />
      <button onClick={() => moveCar('red', !redCar)} type="button">
        Move
      </button>
    </div>
    <div>
      <img className={blueCar ? 'car-right' : 'car-left'} src={carBlue} alt="blue car" />
      <button onClick={() => moveCar('blue', !blueCar)} type="button">
        Move
      </button>
    </div>
    <div>
      <img className={yellowCar ? 'car-right' : 'car-left'} src={carYellow} alt="yellow car" />
      <button onClick={() => moveCar('yellow', !yellowCar)} type="button">
        Move
      </button>
    </div>
  </div>
);

const mapStateToProps = state => {
  return Object.keys(state.moveCarReducer.cars).reduce((car, key) => {
    car[`${key}Car`] = state.moveCarReducer.cars[key];
    return car;
  }, {});
};

const mapDispatchToProps = dispatch => ({
  moveCar: (cor, side) => dispatch(moveCar(cor, side)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
