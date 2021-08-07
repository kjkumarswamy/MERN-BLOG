import { categoryConstants } from "../constants";
import axios from "../../helper/axios";

export const categoryAction = () => {
  return async (dispatch) => {
    dispatch({ type: categoryConstants.CATEGORY_REQUEST });
    const res = await axios.get("/category/get");
    if (res.status === 200) {
      dispatch({
        type: categoryConstants.CATEGORY_SUCCESS,
        payload: {
          categories: res.data.categories,
        },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: categoryConstants.CATEGORY_FAILURE,
          payload: {
            error: res.data.error,
          },
        });
      }
    }
  };
};
