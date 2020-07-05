import { combineReducers } from 'redux';
const INITIAL_VALUE = 0;

const somaInputUmReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'SOMA1':
      return Number(action.value);
    default:
      return state;
  }
};

const somaInputDoisReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'SOMA2':
      return Number(action.value);
    default:
      return state;
  }
};

const somaInputTresReducer = (state = INITIAL_VALUE, action) => {
  switch (action.type) {
    case 'SOMA3':
      return Number(action.value);
    default:
      return state;
  }
};

const combineMyRedux = combineReducers({
  somaInputUmReducer,
  somaInputDoisReducer,
  somaInputTresReducer,
});

export default combineMyRedux;
