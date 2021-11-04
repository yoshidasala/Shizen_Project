import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import watersReducer from "./store/waters";
import mountainsReducer from "./store/mountains";
import collectionsReducer from "./store/collections";

const rootReducer = combineReducers({
  waters: watersReducer,
  mountains: mountainsReducer,
  collections: collectionsReducer,
});

export default createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);
