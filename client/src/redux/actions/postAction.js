import { postConstants } from "../constants";
import axios from "../../helper/axios";

export const allpostsAction = () => {
  return async (dispatch) => {
    dispatch({ type: postConstants.ALLPOST_REQUEST });
    const res = await axios.get("/post/allposts");
    if (res.status === 200) {
      dispatch({
        type: postConstants.ALLPOST_SUCCESS,
        payload: {
          posts: res.data.posts,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: postConstants.ALLPOST_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};

export const singlePost = (id) => {
  return async (dispatch) => {
    dispatch({ type: postConstants.POST_REQUEST });
    const res = await axios.get(`/post/${id}`);

    if (res.status === 200) {
      dispatch({
        type: postConstants.POST_SUCCESS,
        payload: {
          post: res.data.post,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: postConstants.POST_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};
