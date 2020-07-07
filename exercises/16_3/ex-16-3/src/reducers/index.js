import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

const rootReducers = combineReducers({
  loginReducer,
  registerReducer,
});


export default rootReducers;
