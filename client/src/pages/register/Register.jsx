import React, { useState } from "react";
import "./register.css";
import { Redirect } from "react-router-dom";
import { signupAction } from "../../redux/actions/signupAction";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const signinState = useSelector((state) => state.signin);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    name,
    email,
    password,
  };

  if (signinState.authenticate) {
    return <Redirect to="/" />;
  }

  const submitData = (e) => {
    e.preventDefault();
    dispatch(signupAction(user));
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Name</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your Name..."
          onChange={(e) => setName(e.target.value)}
        />
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
        <button onClick={submitData} className="registerButton">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
