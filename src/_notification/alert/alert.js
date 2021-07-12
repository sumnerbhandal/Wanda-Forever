import React from "react";
import "./alert.scss";

const Alert = (props) => {
  function dismiss(e) {
    console.log(e.target.parentNode);
    e.target.parentNode.classList.add("close");
    setTimeout(function () {
      props.setAlertMessage(false);
    }, 500);
  }
  return (
    <div className="alert-bar" role="alert">
      {props.message}
      <button className="material-icons" onClick={dismiss}>
        clear
      </button>
    </div>
  );
};

export default Alert;
