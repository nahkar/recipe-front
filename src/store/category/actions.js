import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_ERROR,
} from './constants';

import api from '../../utils/api';

const categoryRequest = () => ({
  type: CATEGORY_REQUEST,
});

const categorySuccess = (payload) => ({
  type: CATEGORY_SUCCESS,
  payload,
});

const categoryError = () => ({
  type: CATEGORY_ERROR,
});

export const getCategories = () => (dispatch) => {
  dispatch(categoryRequest());
  return api.user
    .fetchCategories()
    .then((response) => {
      dispatch(categorySuccess(response.data));
    })
    .catch((err) => {
      dispatch(categoryError());
    });
};
