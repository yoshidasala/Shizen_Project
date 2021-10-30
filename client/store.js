import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import watersReducer from "./store/waters";

const rootReducer = combineReducers({
  waters: watersReducer,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);
