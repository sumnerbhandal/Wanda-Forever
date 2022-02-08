import React from "react";
import "./styles.scss";

const DropDown = (props) => {
  return (
    <div className={`${props.class} error-container`}>
      <div className="flex-row">
        <label htmlFor={props.id}>{props.label}</label>
        <select
          type={props.type}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          className={props.state}
          onClick={props.onClick}
          onBlur={props.onBlur}
          onChange={props.onChange}
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
