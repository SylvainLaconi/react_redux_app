import { combineReducers, createStore } from "redux";
import lightReducer from "./Reducers/lightReducer";
import counterReducer from "./Reducers/counterReducer";

const store = createStore(
  combineReducers({ light: lightReducer, count: counterReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
