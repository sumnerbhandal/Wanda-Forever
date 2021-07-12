import React from "react";
import "./alert.scss";

const Alert = (props) => {
  function dismiss() {
    var alertMessage = document.getElementById("authentication-state-alert");
    alertMessage.classList.add("close");
    setTimeout(function () {
      props.setAlertMessage(false);
    }, 500);
  }
  setTimeout(function () {
    dismiss();
  }, 5000);
  return (
    <div
      id="authentication-state-alert"
      style={{
        color: props.message.color,
        background: props.message.background
      }}
      className="alert-bar"
      role="alert"
    >
      {props.message.message}
      <button
        style={{
          color: props.message.color
        }}
        className="material-icons"
        onClick={dismiss}
      >
        clear
      </button>
    </div>
  );
};

export default Alert;
