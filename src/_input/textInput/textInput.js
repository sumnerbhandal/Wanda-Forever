import React from "react";
import "./styles.scss";

const FieldInput = (props) => {
  return (
    <React.Fragment>
      <label for={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
    </React.Fragment>
  );
};

export default FieldInput;
