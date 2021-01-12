import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import loginReducer from "./login/reducer";
import postReducer from "./registration/reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  registration: postReducer,
});

const enhacer = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, enhacer);

export default store;
