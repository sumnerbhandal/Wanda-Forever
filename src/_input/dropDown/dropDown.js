import React from "react";
import "./styles.scss";

const DropDown = (props) => {
  return (
    <div className="error-container">
      <div className="flex-row">
        <label for={props.id}>{props.label}</label>
        <select
          type={props.type}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          className={props.state}
        >
          {props.option.map((option, key) => (
            <option key={key} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {typeof props.message === "undefined" ? null : <p>{props.message}</p>}
    </div>
  );
};

export default DropDown;
