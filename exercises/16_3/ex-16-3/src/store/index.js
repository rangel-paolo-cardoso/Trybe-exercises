import { createStore } from 'redux';
import loginPageReducer from '../reducers';

const store = createStore(loginPageReducer);

export default store;