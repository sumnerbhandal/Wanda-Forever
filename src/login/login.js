import React from "react";
import { Link } from "react-router-dom/index";
import "./styles.scss";
import FieldInput from "../_input/textInput/textInput";
import Button from "../_input/button/button";

const LoginPage = (props) => {
  const forwardArrow = (
    <>
      Login <span className="material-icons">arrow_forward</span>
    </>
  );

  return (
    <div className="login-page">
      <div className="left">
        <img
          alt="Pubic Demo"
          className="login-hero"
          src="https://uploads-ssl.webflow.com/5dc98e8b04adb0e7091d2920/5dc98e8b04adb0146c1d2ad1_Asset%2012.svg"
        />
      </div>
      <div className="right">
        <form>
          <div className="robin-logo">
            <img
              alt="Robin Logo"
              src="https://portal.robinai.co.uk/images/robin-logo.svg"
            />
          </div>
          <FieldInput
            label="Username"
            type="text"
            name="email"
            placeholder="joe.bloggs@lawsociety.com"
          />
          <FieldInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div className="submit-reset">
            <Link to="/contracts" tabIndex="-1">
              <Button variant="primary" type="submit" label={forwardArrow} />
            </Link>
            <Button variant="text" type="button" label="Forgot Password?" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
