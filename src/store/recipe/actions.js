import { RECIPE_REQUEST,
         RECIPE_SUCCESS,
        RECIPE_ERROR,
        CREATE_RECIPE_REQUEST, 
        CREATE_RECIPE_SUCCESS,
        CREATE_RECIPE_ERROR } from './constants';

import api from '../../utils/api';

import routes from './../../constants/routes';

const recipeRequest = () => ({
  type: CREATE_RECIPE_REQUEST,
  type: RECIPE_REQUEST,
});

const recipeSuccess = (payload) => ({
  type: RECIPE_SUCCESS,
  payload,
});

const createRecipeSuccess = () => ({
  type: CREATE_RECIPE_SUCCESS,
})

const recipeError = () => ({
  type: CREATE_RECIPE_ERROR,
  type: RECIPE_ERROR,
});

export const getRecipes = () => (dispatch) => {
  dispatch(recipeRequest());
  return api.user
    .fetchRecipes()
    .then((response) => {
      dispatch(recipeSuccess(response.data));
    })
    .catch((err) => {
      dispatch(recipeError());
    });
};

export const createRecipe = (data, history) => (dispatch) => {
  dispatch(recipeRequest());
  return api.user
    .createRecipe(data)
    .then(() => {
      dispatch(createRecipeSuccess());
      history.push(routes.recipes);
    })
    .catch((err) => {
      dispatch(recipeError());
    });
};
