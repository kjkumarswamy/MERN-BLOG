import { postConstants } from "../constants";

const initialState = {
  loading: false,
  posts: "",
  error: "",
};

export const allpostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postConstants.ALLPOST_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case postConstants.ALLPOST_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        posts: action.payload.posts,
      });
    case postConstants.ALLPOST_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};

const postState = {
  loading: false,
  post: false,
  error: null,
};

export const singlePostReducer = (state = postState, action) => {
  switch (action.type) {
    case postConstants.POST_REQUEST:
      return (state = {
        ...state,
        loading: true,
      });
    case postConstants.POST_SUCCESS:
      return (state = {
        ...state,
        loading: false,
        post: action.payload.post,
      });
    case postConstants.POST_FAILURE:
      return (state = {
        ...state,
        loading: false,
        error: action.payload.error,
      });
    default:
      return state;
  }
};
