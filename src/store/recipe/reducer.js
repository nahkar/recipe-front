import { RECIPE_REQUEST, RECIPE_SUCCESS, RECIPE_ERROR } from './constants';

const initialState = {
  recipes: [],
};

const recipeReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RECIPE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case RECIPE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: payload,
      };
    case RECIPE_ERROR:
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
