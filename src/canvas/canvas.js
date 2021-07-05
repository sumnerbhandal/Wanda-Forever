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
        {props.sidebar}
      </div>
      <div className="page">{props.page}</div>
    </div>
  );
};

export default Canvas;
