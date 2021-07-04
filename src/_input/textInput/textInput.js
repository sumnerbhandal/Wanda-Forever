import React from "react";
import "./styles.scss";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default TextInput = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input placeholder={props.placeholder} />
    </>
  );
};
