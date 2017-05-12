export const LOAD_TODOS = 'LOAD_TODOS';

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_TODOS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
