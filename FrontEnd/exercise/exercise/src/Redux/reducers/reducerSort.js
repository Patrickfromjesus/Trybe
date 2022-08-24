import { ORDER_NAMES } from "../actions/order";

const INITIAL_STATE = { order: false };

const reducerSort = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ORDER_NAMES:
      return {
        ...state,
        order: !state.order,
      }
    default:
      return state;
  }
}

export default reducerSort;