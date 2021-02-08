import {
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  CATEGORY_ERROR,
} from "./constants";

const initialState = {
  category: [],
};

const categoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORY_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case CATEGORY_SUCCESS:
      return {
        ...state,
        category: payload,
        isLoading: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default categoryReducer;
