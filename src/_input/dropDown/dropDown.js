import React from "react";
import "./styles.scss";

const DropDown = (props) => {
  return (
    <React.Fragment>
      <label for={props.id}>{props.label}</label>
      <select
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
      >
        {props.option.map((option, key) => (
          <option value="volvo">{option}</option>
        ))}
      </select>
    </React.Fragment>
  );
};

export default DropDown;
