import React, { useState } from "react";
import "./styles.scss";

const Canvas = (props) => {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <div className="canvas">
      <div className={`sidebar ${drawerState ? "open" : ""}`}>
        <button onClick={() => setDrawerState(!drawerState)} className="close">
          <span className="material-icons">clear</span>
        </button>
        <div className="section">
          <div className="robin-logo">
            <img
              alt="Robin Logo"
              src="https://portal.robinai.co.uk/images/robin-logo.svg"
            />
          </div>
        </div>
        <div className="section">
          <p className="user">
            <span class="material-icons">account_circle</span>
            <strong>{props.username}</strong>
          </p>
        </div>
        {props.sidebar}
      </div>
      <div className="page">{props.page}</div>
    </div>
  );
};

export default Canvas;
