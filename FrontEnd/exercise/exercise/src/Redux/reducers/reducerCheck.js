import { CHECK_LOGIN } from "../actions/checkLogin";

const INITIAL_STATE = { logged: false };

const reducerCheck = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CHECK_LOGIN:
      return { logged: true }
    default:
      return state;
  }
}

export default reducerCheck;