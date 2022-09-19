import { IS_LOADING } from '../actions';
import { GET_DATA } from '../actions';
import { GET_ERROR } from '../actions';

const INITIAL_STATE = { loading: false, article: [] };

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_DATA:
      return {
        ...state,
        loading: false,
        article: action.content,
      }
    case GET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    default:
      return state;
  }
}

export default reducer;