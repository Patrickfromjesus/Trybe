import reducer from "./reducer";
import reducerCheck from "./reducerCheck";
import reducerSort from "./reducerSort";
import { combineReducers } from "redux";

const reducerRoot = combineReducers({ reducer, reducerCheck, reducerSort });

export default reducerRoot;
