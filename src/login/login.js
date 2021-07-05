import React from "react";
import { Link } from "react-router-dom/index";
import "./styles.scss";

const LoginPage = (props) => {
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

          <div className="submit-reset">
            <Link to="./contracts" tabIndex="0"></Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
