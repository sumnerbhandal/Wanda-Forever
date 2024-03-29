import React, { useState } from "react";
import "./styles.scss";

const Canvas = (props) => {
  // const [drawerState, setDrawerState] = useState(false);

  return (
    <div className={`canvas ${props.className}`}>
      <div className="page">{props.page}</div>
    </div>
  );
};

export default Canvas;
