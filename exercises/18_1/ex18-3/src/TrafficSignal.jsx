// import React, { Component } from 'react';
// import redSignal from './images/redSignal.jpeg';
// import greenSignal from './images/greenSignal.jpeg';
// import yellowSignal from './images/yellowSignal.jpeg';
// import Context from './ContextStreet';

// const renderSignal = (signalColor) => {
//   if (signalColor === 'red') {
//     return redSignal;
//   }
//   if (signalColor === 'green') {
//     return greenSignal;
//   }
//   if (signalColor === 'yellow') {
//     return yellowSignal;
//   }
//   return null;
// };

// class TrafficSignal extends Component() {
//   render() {
//     const { signal: { color }, changeSignal } = this.context;
//     return (
//       <div>
//         <div className="button-container">
//           <button onClick={() => changeSignal('red')} type="button">
//             Red
//           </button>
//           <button onClick={() => changeSignal('yellow')} type="button">
//             Yellow
//           </button>
//           <button onClick={() => changeSignal('green')} type="button">
//             Green
//           </button>
//         </div>
//         <img className="signal" src={renderSignal(color)} alt="Semáforo" />
//       </div>
//     );
//   }
// }

// TrafficSignal.contextType = Context;

// export default TrafficSignal;
