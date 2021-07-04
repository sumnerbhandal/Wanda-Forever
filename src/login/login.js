import React from "react";
import TextInput from "../_input/textInput/textInput";
import loginImage from "./img/login.svg";
import "./styles.scss";

const LoginPage = (props) => {
  return (
    <div className="login-page">
      <div className="left">
        <img className="login-hero" src={loginImage} />
      </div>
      <div className="right">
        <form>
          <TextInput label="Username" placeholder="Username or email" />
          <TextInput label="Password" placeholder="Password" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
