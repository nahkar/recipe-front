import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import userReducer from './user/reducer';
import categoryReducer from './category/reducer';
import recipeReducer from './recipe/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  category: categoryReducer,
  recipe: recipeReducer,
});

const enhacer = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, enhacer);

export default store;
