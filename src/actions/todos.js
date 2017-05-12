import * as api from '../api/index';
import * as actionTypes from '../reducers/todos';
import { commandActionCreator } from './actionCreators';

export const loadTodos = () => {
  return commandActionCreator(api.fetchTodos(), 'FETCH_TODOS_REQUEST', (dispatch, res) => {
    dispatch({
      type: actionTypes.LOAD_TODOS,
      payload: res
    });
    return Promise.resolve({});
  });
};