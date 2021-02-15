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
  GET_CURRENT_RECIPE_REQUEST,
  GET_CURRENT_RECIPE_SUCCESS,
  GET_CURRENT_RECIPE_ERROR,
  CLEAR_SINGLE_RECIPE,
} from './constants';

import api from '../../utils/api';

import routes from './../../constants/routes';

const recipeRequest = () => ({
  type: RECIPE_REQUEST,
});

const recipeSuccess = (payload) => ({
  type: RECIPE_SUCCESS,
  payload,
});

const recipeError = () => ({
  type: RECIPE_ERROR,
});

const getCurrentRecipeRequest = () => ({
  type: GET_CURRENT_RECIPE_REQUEST
});

const getCurrentRecipeSuccess = (payload) => ({
  type: GET_CURRENT_RECIPE_SUCCESS,
  payload: payload,
});

const getCurrentRecipeError = () => ({
  type: GET_CURRENT_RECIPE_ERROR
});

const createRecipeRequest = () => ({
  type: CREATE_RECIPE_REQUEST,
});

const createRecipeSuccess = () => ({
  type: CREATE_RECIPE_SUCCESS,
});

const createRecipeError = () => ({
  type: CREATE_RECIPE_ERROR,
});

const deleteRecipeRequest = () => ({
  type: DELETE_RECIPE_REQUEST,
});

const deleteRecipeSuccess = () => ({
  type: DELETE_RECIPE_SUCCESS,
});

const deleteRecipeError = () => ({
  type: DELETE_RECIPE_ERROR,
});

const editRecipeRequest = () => ({
  type: EDIT_RECIPE_REQUEST,
});

const editRecipeSuccess = () => ({
  type: EDIT_RECIPE_SUCCESS,
});

const editRecipeError = () => ({
  type: EDIT_RECIPE_ERROR,
});

export const clearSingleRecipe = () => ({
  type: CLEAR_SINGLE_RECIPE,
});

export const getRecipes = () => (dispatch) => {
  dispatch(recipeRequest());
  return api.recipe
    .fetchRecipes()
    .then((response) => {
      dispatch(recipeSuccess(response.data));
    })
    .catch((err) => {
      dispatch(recipeError());
    });
};

export const getCurrentRecipe = (id) => (dispatch) => {
  dispatch(getCurrentRecipeRequest());
  return api.recipe
    .getCurrentRecipe(id)
    .then((response) => {
      dispatch(getCurrentRecipeSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getCurrentRecipeError());
    });
};

export const createRecipe = (data, history) => (dispatch) => {
  dispatch(createRecipeRequest());
  return api.recipe
    .createRecipe(data)
    .then(() => {
      dispatch(createRecipeSuccess());
      history.push(routes.recipes);
    })
    .catch((err) => {
      dispatch(createRecipeError());
    });
};

export const deleteRecipe = (id) => (dispatch) => {
  dispatch(deleteRecipeRequest());
  return api.recipe
    .deleteRecipe(id)
    .then(() => {
      dispatch(deleteRecipeSuccess());
      dispatch(getRecipes());
    })
    .catch((err) => {
      dispatch(deleteRecipeError());
    });
};

export const editRecipe = (id, data) => (dispatch) => {
  dispatch(editRecipeRequest());
  return api.recipe
    .editRecipe(id, data)
    .then(() => {
      dispatch(editRecipeSuccess());
    })
    .catch((err) => {
      dispatch(editRecipeError());
    });
};