import React from "react";
import "./styles.scss";

const Button = (props) => {
  return (
    <button id={props.id} className={`cta ${props.variant}`} type={props.type}>
      {props.label}
    </button>
  );
};

export default Button;
