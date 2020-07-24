import { createStore, combineReducers } from 'redux';
import { moveCarReducer } from './moveCarReducer';
import { signalReducer } from './signalReducer';

const ruducers = combineReducers({
  moveCarReducer,
  signalReducer,
});

const store = createStore(
  ruducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
