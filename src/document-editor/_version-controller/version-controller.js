import React, { useState, useEffect } from "react";
import "./styles.scss";

const VersionController = (props) => {
  const [initials, setInitials] = useState("");

  useEffect(() => {
    if (props.user != undefined) {
      let myStr = props.user;
      let matches = myStr.match(/\b(\w)/g);
      setInitials(matches.join(""));
    } else {
      setInitials("");
    }
  }, []);

  return (
    <div className="version-controller-container">
      <div className="user">
        <div className="user-badge">{initials}</div>
      </div>
      <div className="details">
        <p>
          <strong>{props.version}</strong>
        </p>
        <p>
          {props.date} at {props.time}
        </p>
        <p>
          <strong>{props.user}</strong> {props.action}
        </p>
      </div>
      <div className="more-actions">Icon</div>
    </div>
  );
};

export default VersionController;
