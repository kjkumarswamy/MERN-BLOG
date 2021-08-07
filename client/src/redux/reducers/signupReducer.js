import { signupConstants } from "../constants";

const initialState = {
  loading: false,
  message: "",
  error: null,
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case signupConstants.SIGNUP_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case signupConstants.SIGNUP_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        message: action.payload.message,
      });
    case signupConstants.SIGNUP_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};
