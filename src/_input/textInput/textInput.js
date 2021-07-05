import React from "react";
import "./styles.scss";

export default Input = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </React.Fragment>
  );
};
