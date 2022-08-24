import { ADD_CLIENT } from "../actions/addClient";
import { REMOVE_CLIENT } from "../actions/removeClient";

const INITIAL_STATE = { clients: [] };

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.clients],
      }
    case REMOVE_CLIENT:
      return {
        ...state,
        clients: [...state.clients].filter((elem) => elem.name !== action.client.name),
      }
    default:
      return state;
  }
}

export default reducer;
