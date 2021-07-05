import React from "react";
import "./styles.scss";

export default TextInput = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
      />
    </>
  );
};
