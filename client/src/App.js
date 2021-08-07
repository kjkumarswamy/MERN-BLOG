import React, { useEffect } from "react";
import Topbar from "./component/topbar/Topbar";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn } from "./redux/actions/signinAction";
import Routes from "./component/routes/Routes";

const App = () => {
  const dispatch = useDispatch();
  const signinState = useSelector((state) => state.signin);

  useEffect(() => {
    if (!signinState.authenticate) {
      return dispatch(isUserLoggedIn());
    }
  }, [signinState.authenticate, dispatch]);

  return (
    <div>
      <Topbar />
      <Routes />
    </div>
  );
};

export default App;
