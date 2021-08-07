import { categoryConstants } from "../constants";

const initialState = {
  loading: false,
  categories: false,
  error: "",
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryConstants.CATEGORY_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case categoryConstants.CATEGORY_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        categories: action.payload.categories,
      });
    case categoryConstants.CATEGORY_FAILURE:
      return (state = {
        loading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};
