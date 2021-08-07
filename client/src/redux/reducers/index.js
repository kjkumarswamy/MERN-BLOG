import { signinReducer } from "./signinReducer";
import { signupReducer } from "./signupReducer";
import { allpostsReducer, singlePostReducer } from "./postReducer";
import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";

const rootReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  allposts: allpostsReducer,
  singlepost: singlePostReducer,
  categories: categoryReducer,
});

export default rootReducer;
