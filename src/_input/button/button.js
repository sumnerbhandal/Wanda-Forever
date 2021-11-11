import React from "react";
import "./styles.scss";

const Button = (props) => {
  return (
    <button
      id={props.id}
      className={`cta ${props.variant}`}
      type={props.type}
      onClick={props.onClick}
      contentEditable={props.contentEditable}
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
    >
      {props.label}
    </button>
  );
};

export default Button;
