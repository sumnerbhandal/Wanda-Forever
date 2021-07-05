import React from "react";
import "./styles.scss";

export default Button = (props) => {
  return (
    <>
      <button className={props.variant} type={props.type}>
        {props.label}
      </button>
    </>
  );
};
