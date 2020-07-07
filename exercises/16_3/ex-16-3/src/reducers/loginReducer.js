import { LOGIN } from '../actions';

const INITIAL_STATE = {};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return action.value;
    default:
      return state;
  }
};

export default loginReducer;
