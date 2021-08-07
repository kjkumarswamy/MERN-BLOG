import { signinConstants } from "../constants";

const initialState = {
  token: "",
  user: {
    name: "",
    email: "",
  },
  authenticating: false,
  authenticate: false,
  message: "",
  error: "",
  loading: false,
};

export const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case signinConstants.SIGNIN_REQUEST:
      return (state = {
        ...state,
        authenticating: true,
      });
    case signinConstants.SIGNIN_SUCCESS:
      return (state = {
        ...state,
        authenticating: false,
        authenticate: true,
        token: action.payload.token,
        user: action.payload.user,
      });
    case signinConstants.SIGNIN_FAILURE:
      return (state = {
        ...state,
        authenticating: false,
        error: action.payload.error,
      });
    case signinConstants.SIGNOUT_REQUEST:
      return (state = {
        ...initialState,
        loading: true,
        authenticate: false,
      });
    case signinConstants.SIGNOUT_SUCCESS:
      return (state = {
        loading: false,
        authenticate: false,
        message: action.payload.message,
      });
    case signinConstants.SIGNOUT_FAILURE:
      return (state = {
        loading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};
