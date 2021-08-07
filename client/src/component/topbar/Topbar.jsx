import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signoutAction } from "../../redux/actions/signinAction";

const Topbar = () => {
  const dispatch = useDispatch();
  const signinState = useSelector((state) => state.signin);

  const signoutPage = () => {
    return dispatch(signoutAction());
  };

  const renderLoggedInLinks = () => {
    return (
      <>
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <Link style={{ textDecoration: "none", color: "grey" }} to="/">
              <li className="topListItem">HOME</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "grey" }} to="/about">
              <li className="topListItem">ABOUT</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "grey" }}
              to="/contact"
            >
              <li className="topListItem">CONTACT</li>
            </Link>
            <Link style={{ textDecoration: "none", color: "grey" }} to="/write">
              <li className="topListItem">WRITE</li>
            </Link>
          </ul>
        </div>
        <div className="topRight">
          <Link to="/settings">
            <img
              className="topImg"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxwZXJzb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="no"
            />
          </Link>
          <i className="topSearchIcon fas fa-search"></i>
        </div>
        <div className="topRightLogout">
          <Link style={{ color: "grey" }} to="/register">
            <button onClick={signoutPage} className="topLogoutButton">
              LOGOUT
            </button>
          </Link>
        </div>
      </>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <>
        <div className="topCenter">
          <ul className="topList">
            <Link style={{ textDecoration: "none", color: "grey" }} to="/login">
              <li className="topListItem">LOGIN</li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "grey" }}
              to="/register"
            >
              <li className="topListItem">REGISTER</li>
            </Link>
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="top">
      {signinState.authenticate
        ? renderLoggedInLinks()
        : renderNonLoggedInLinks()}
    </div>
  );
};

export default Topbar;
