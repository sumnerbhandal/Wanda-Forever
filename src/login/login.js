import React from "react";
import TextInput from "../_input/textInput/textInput";
import Button from "../_input/button/button";
import loginImage from "./img/login.svg";
import robinLogo from "./img/robin-logo.svg";
import { Link } from "react-router-dom/index";
import "./styles.scss";

const LoginPage = (props) => {
  return (
    <div className="login-page">
      <div className="left">
        <img className="login-hero" src={loginImage} />
      </div>
      <div className="right">
        <form>
          <div className="robin-logo">
            <img src={robinLogo} />
          </div>
          <TextInput
            label="Username"
            type="text"
            name="email"
            placeholder="joe.bloggs@lawsociety.com"
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div className="submit-reset">
            <Link to="./contracts">
              <Button variant="primary" type="submit" label="Login ->" />
            </Link>
            <Button variant="text" type="button" label="Forgot Password?" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
