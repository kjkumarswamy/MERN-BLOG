import { signinConstants } from "../constants";
import axios from "../../helper/axios";

export const signinAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({ type: signinConstants.SIGNIN_REQUEST });
      const res = await axios.post("/user/signin", {
        ...user,
      });

      if (res.status === 200) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: signinConstants.SIGNIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        if (res.status === 400) {
          dispatch({
            type: signinConstants.SIGNIN_FAILURE,
            payload: {
              error: res.data.error,
            },
          });
        }
      }
    } catch (error) {
      const { data } = error.response;
      dispatch({
        type: signinConstants.SIGNIN_FAILURE,
        payload: {
          error: data.error,
        },
      });
    }
  };
};

export const signoutAction = () => {
  return async (dispatch) => {
    dispatch({ type: signinConstants.SIGNOUT_REQUEST });
    const res = await axios.post("/user/signout");

    if (res.status === 200) {
      localStorage.clear();
      dispatch({
        type: signinConstants.SIGNOUT_SUCCESS,
        payload: {
          message: res.data.message,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: signinConstants.SIGNOUT_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};

export const isUserLoggedIn = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: signinConstants.SIGNIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: signinConstants.SIGNIN_FAILURE,
        payload: {
          error: "Login failed",
        },
      });
    }
  };
};
