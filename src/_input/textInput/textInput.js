import React from "react";
import "./styles.scss";

const FieldInput = (props) => {
  return (
    <React.Fragment>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
    </React.Fragment>
  );
};

export default FieldInput;
