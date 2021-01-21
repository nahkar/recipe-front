import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const enhacer = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, enhacer);

export default store;
