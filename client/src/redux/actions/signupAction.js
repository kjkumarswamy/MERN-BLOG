import { signupConstants } from "../constants";
import axios from "../../helper/axios";

export const signupAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: signupConstants.SIGNUP_REQUEST });
      const res = await axios.post("/user/signup", {
        ...user,
      });

      if (res.status === 201) {
        dispatch({
          type: signupConstants.SIGNUP_SUCCESS,
          payload: {
            message: res.data.message,
          },
        });
      } else {
        if (res.status === 400) {
          dispatch({
            type: signupConstants.SIGNUP_FAILURE,
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: signupConstants.SIGNUP_FAILURE,
        payload: {
          error: data.error,
        },
      });
    }
  };
};
