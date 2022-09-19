import { render } from "@testing-library/react";
import { createStore, applyMiddleware} from "redux";
import { reducer } from "../Redux/store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore(reducer, applyMiddleware(thunk), initialState),
  } = {}) => ({
    ...render(<Provider store={ store }>{ component }</Provider>)
  });

export default renderWithRedux;
