import React from "react";
import "./styles.scss";

const TextArea = (props) => {
  return (
    <div className="error-container">
      <div className="flex-row">
        <label for={props.id}>{props.label}</label>
        <textArea
          type={props.type}
          id={props.id}
          name={props.name}
          rows={props.rows}
          placeholder={props.placeholder}
          onClick={props.onClick}
          onBlur={props.onBlur}
          onChange={props.onChange}
          className={props.state}
        >
          {props.content}
          Example Content Here
        </textArea>
      </div>

      {typeof props.message === "undefined" ? null : <p>{props.message}</p>}
    </div>
  );
};

export default TextArea;
