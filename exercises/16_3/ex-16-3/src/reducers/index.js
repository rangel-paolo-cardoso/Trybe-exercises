import { CHANGE_TEXT } from '../actions';

const INITIAL_STATE = {
  nome: '',
  email: '',
};

const loginPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

export default loginPageReducer;
