import React from "react";
import "./styles.scss";

const FieldInput = (props) => {
  return (
    <div className="error-container">
      <div className="flex-row">
        <label for={props.id}>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          required
          value={props.value}
          onChange={props.onChange}
          className={props.state}
        />
      </div>

      {typeof props.message === "undefined" ? null : <p>{props.message}</p>}
    </div>
  );
};

export default FieldInput;
