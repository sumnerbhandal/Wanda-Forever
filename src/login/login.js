import React from "react";
import TextInput from "../_input/textInput/textInput";
import Button from "../_input/button/button";
import { Link } from "react-router-dom/index";
import "./styles.scss";

const LoginPage = (props) => {
  return (
    <div className="login-page">
      <div className="left">
        <img
          className="login-hero"
          src="https://uploads-ssl.webflow.com/5dc98e8b04adb0e7091d2920/5dc98e8b04adb0146c1d2ad1_Asset%2012.svg"
        />
      </div>
      <div className="right">
        <form>
          <div className="robin-logo">
            <img src="https://portal.robinai.co.uk/images/robin-logo.svg" />
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
            <Link to="./contracts" tabIndex="0">
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
