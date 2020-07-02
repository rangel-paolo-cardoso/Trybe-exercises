const INITIAL_STATE = 0;

const countClickReducer = (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

export default countClickReducer;