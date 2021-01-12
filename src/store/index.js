import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import postReducer from "./registration/reducer";

const rootReducer = combineReducers({
  registration: postReducer,
});
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
