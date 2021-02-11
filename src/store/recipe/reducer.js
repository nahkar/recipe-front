// file deepcode ignore DuplicateCaseBody: <comment the reason here>

import { 
  RECIPE_REQUEST, 
  RECIPE_SUCCESS, 
  RECIPE_ERROR, 
  CREATE_RECIPE_REQUEST, 
  CREATE_RECIPE_SUCCESS, 
  CREATE_RECIPE_ERROR,
  DELETE_RECIPE_REQUEST,
  DELETE_RECIPE_SUCCESS,
  DELETE_RECIPE_ERROR,
  EDIT_RECIPE_REQUEST,
  EDIT_RECIPE_SUCCESS,
  EDIT_RECIPE_ERROR,
 } from './constants';

const initialState = {
  recipes: [],
};

const recipeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case RECIPE_REQUEST:
    case CREATE_RECIPE_REQUEST:
    case DELETE_RECIPE_REQUEST:
    case EDIT_RECIPE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case RECIPE_SUCCESS:
    case EDIT_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: payload,
      };

    case CREATE_RECIPE_SUCCESS:
    case DELETE_RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }

    case RECIPE_ERROR:
    case CREATE_RECIPE_ERROR:
    case DELETE_RECIPE_ERROR:
    case EDIT_RECIPE_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default recipeReducer;
