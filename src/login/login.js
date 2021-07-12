import React, { useState } from "react";
import { useNavigate } from "react-router-dom/index";
import "./styles.scss";
import FieldInput from "../_input/textInput/textInput";
import Button from "../_input/button/button";

const LoginPage = (props) => {
  const forwardArrow = (
    <>
      Login <span className="material-icons">arrow_forward</span>
    </>
  );
  const navigate = useNavigate();

  function Login(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (
      formData.get("email") === "robin" &&
      formData.get("password") === "batman"
    ) {
      // with authenticated credentials allow access to other pages
      props.authoriseLogin(true);
      // local storage with expiry references
      const timeDate = new Date().getTime();
      localStorage.setItem("validationTime", timeDate);
      // push to next page
      props.loginAlert(false);
      navigate("/contracts");
    } else {
      props.loginAlert("Invalid Login Details");
    }
  }

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
        <form onSubmit={Login}>
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
            <Button variant="primary" type="submit" label={forwardArrow} />
            <Button variant="text" type="button" label="Forgot Password?" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
