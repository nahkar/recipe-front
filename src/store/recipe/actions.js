import { RECIPE_REQUEST, RECIPE_SUCCESS, RECIPE_ERROR } from './constants';

import api from '../../utils/api';

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
