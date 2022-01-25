import React from "react";
import "./styles.scss";

const Toggle = (props) => {
  return (
    <div className="error-container">
      <div className="flex-row">
        <label for={props.id} className="toggle">
          {props.label}
          <div className="switch">
            <input
              id={props.id}
              type="checkbox"
              className={props.state}
              name={props.name}
              onClick={props.onClick}
              onBlur={props.onBlur}
              onChange={props.onChange}
            />
            <span className="slider round"></span>
          </div>
        </label>
      </div>

      {typeof props.message === "undefined" ? null : <p>{props.message}</p>}
    </div>
  );
};

export default Toggle;
