import React from "react";
import { useNavigate } from "react-router-dom/index";
import "./styles.scss";
import FieldInput from "../_input/textInput/textInput";
import Button from "../_input/button/button";

const forwardArrow = (
  <>
    Login{" "}
    <span aria-hidden="true" className="material-icons">
      arrow_forward
    </span>
  </>
);
const submitArrow = (
  <>
    Submit{" "}
    <span aria-hidden="true" className="material-icons">
      arrow_forward
    </span>
  </>
);

const LoginPage = (props) => {
  const navigate = useNavigate();

  function stepOne(e) {
    e.preventDefault();
    props.loginAlert(false);
    const formData = new FormData(e.currentTarget);
    if (
      formData.get("email") === "robin" &&
      formData.get("password") === "batman"
    ) {
      e.target.classList.add("step-one-validated");
      e.target.nextElementSibling.classList.add("step-two-starting");
    } else {
      props.loginAlert({
        message: "The username or password you entered is incorrect.",
        color: "var(--robin-blue)",
        background: "var(--error)"
      });
    }
    setTimeout(function () {
      const dismissButton = document.getElementById("alert-dismiss");
      dismissButton.click();
    }, 5000);
  }

  function stepBack(e) {
    const stepOne = document.getElementById("login-step-one");
    stepOne.classList.remove("step-one-validated");
    stepOne.nextElementSibling.classList.remove("step-two-starting");
  }

  function Login(e) {
    e.preventDefault();
    //time of day greeting
    var time = new Date().getHours();
    let greeting;
    if (time < 12) {
      greeting = "Good morning";
    } else if (time > 12 && time < 17) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    // with authenticated credentials allow access to other pages
    props.authoriseLogin(true);
    // local storage with expiry references
    const timeDate = new Date().getTime();
    localStorage.setItem("validationTime", timeDate);
    // push to next page
    props.loginAlert(false);
    navigate("/contracts");
    props.loginAlert({
      message: greeting + " Robin.",
      color: "var(--robin-blue)",
      background: "var(--success)"
    });
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
        <div className="login-container">
          <div className="robin-logo">
            <img
              alt="Robin Logo"
              src="https://portal.robinai.co.uk/images/robin-logo.svg"
            />
          </div>
          <div className="form-container">
            <form id="login-step-one" className="step-one" onSubmit={stepOne}>
              <FieldInput
                id="login-username"
                label="Username"
                type="text"
                name="email"
                placeholder="example@email.co.uk"
              />
              <FieldInput
                id="login-password"
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
            <form className="step-two" onSubmit={Login}>
              <div className="back-to-step-one-button">
                <button onClick={stepBack} className="material-icons">
                  arrow_backward
                </button>
              </div>
              <ul>
                <li>Step 1. Open your two-factor authentication (2FA) app.</li>
                <li>Step 2. Locate Robin AI in your list.</li>
                <li>Step 3. Enter authentication code below.</li>
              </ul>
              <FieldInput
                label="Two-Factor Authentication (2FA) Code"
                type="password"
                name="password"
                placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;"
              />
              <div className="submit-reset">
                <Button variant="primary" type="submit" label={submitArrow} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
