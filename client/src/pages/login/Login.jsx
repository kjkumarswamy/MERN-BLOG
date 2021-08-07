import React, { useState } from "react";
import "./login.css";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signinAction } from "../../redux/actions/signinAction";

const Login = () => {
  const dispatch = useDispatch();
  const signinState = useSelector((state) => state.signin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = { email, password };

  const submitData = (e) => {
    e.preventDefault();
    dispatch(signinAction(user));
  };

  if (signinState.authenticate) {
    return <Redirect to="/" />;
  }

  if (signinState.authenticating) {
    return <p>Loading...!</p>;
  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={submitData} className="loginButton">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
