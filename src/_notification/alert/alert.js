import React from "react";
import "./alert.scss";

const Alert = (props) => {
  function dismiss(e) {
    e.target.parentNode.classList.add("close");
    setTimeout(function () {
      props.setAlertMessage(false);
    }, 500);
  }
  return (
    <div
      style={{
        color: props.message.color,
        background: props.message.background
      }}
      className="alert-bar"
      role="alert"
    >
      {props.message.message}
      <button
        id="alert-dismiss"
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
