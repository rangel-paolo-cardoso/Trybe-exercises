import { createStore } from 'redux';
import countClickReducer from '../reducer';

const store = createStore(countClickReducer);

export default store;
