// import React, { Component } from 'react';
// import carBlue from './images/carBlue.jpeg';
// import carRed from './images/carRed.jpeg';
// import carYellow from './images/carYellow.jpeg';
// import Context from './ContextStreet';
// import sources from './sources';
// // import { moveCar } from './redux/actionCreators';

// class Cars extends Component() {
//   render() {
//     const {
//       cars: { red, yellow, blue },
//       moveCar,
//     } = this.context;
//     console.log(this.context);
//     return (
//       <div>
//         <div>
//           <img className={red ? 'car-right' : 'car-left'} src={sources.carRed} alt="red car" />
//           <button onClick={() => moveCar('red', !red)} type="button">
//             Move
//           </button>
//         </div>
//         <div>
//           <img className={blue ? 'car-right' : 'car-left'} src={sources.carBlue} alt="blue car" />
//           <button onClick={() => moveCar('blue', !blue)} type="button">
//             Move
//           </button>
//         </div>
//         <div>
//           <img className={yellow ? 'car-right' : 'car-left'} src={sources.carYellow} alt="yellow car" />
//           <button onClick={() => moveCar('yellow', !yellow)} type="button">
//             Move
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// // const mapStateToProps = state => {
// //   return Object.keys(state.moveCarReducer.cars).reduce((car, key) => {
// //     car[`${key}Car`] = state.moveCarReducer.cars[key];
// //     return car;
// //   }, {});
// // };

// // const mapDispatchToProps = dispatch => ({
// //   moveCar: (cor, side) => dispatch(moveCar(cor, side)),
// // });

// Cars.contextType = Context;

// export default Cars;
// // export default connect(mapStateToProps, mapDispatchToProps)(Cars);
