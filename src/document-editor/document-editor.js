import React, { useState } from "react";
import EditablePage from "./utils/editable-page";
import "./styles.scss";

const DocumentEditor = (props) => {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <div className="framework">
      {" "}
      <EditablePage />
    </div>
  );
};

export default DocumentEditor;
