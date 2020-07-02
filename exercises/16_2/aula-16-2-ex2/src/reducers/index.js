const INITIAL_VALUE = 0;

const somatorioReducer = (state = INITIAL_VALUE, action) => {
  console.log(state);
  switch (action.type) {
    case 'SOMA':
      return state + Number(action.value);
    default:
      return state;
  }
};

export default somatorioReducer;
