import { createStore } from 'redux';
import somatorioReducer from '../reducers';

const store = createStore(somatorioReducer);

export default store;
