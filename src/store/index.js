import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from "redux-logger";
import loginReducer from './login/reducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

const enhacer = applyMiddleware(logger, thunk)
const store = createStore(rootReducer, enhacer);

export default store;
