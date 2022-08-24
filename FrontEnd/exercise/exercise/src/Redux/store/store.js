import reducerRoot from "../reducers/reducerRoot";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from "redux";

const store = createStore(reducerRoot, composeWithDevTools());

export default store;
