import React, { useState, useEffect } from "react";
import DropDown from "../../_input/dropDown/dropDown";

const VersionToolbar = (props) => {
  const [modTools, setModTools] = useState(props.headerFocused);
  const [regularTools, setRegularTools] = useState(props.contractFocused);

  useEffect(() => {
    props.headerFocused || props.footerFocused
      ? setModTools(true)
      : setModTools(false);

    props.contractFocused ? setRegularTools(true) : setRegularTools(false);
  });

  const makeBold = (e) => {
    e.preventDefault();
    document.execCommand("bold");
  };

  const makeItalic = (e) => {
    e.preventDefault();
    document.execCommand("italic");
  };
  const makeUnderlined = (e) => {
    e.preventDefault();
    document.execCommand("underline");
  };

  return (
    <div className="document-toolbar-container">
      <div className="document-toolbar">
        <div className="action-container">
          <div className="footer-header-button-container">
            <p>Showing differences between</p>
            <DropDown
              value="Latest"
              option={["Latest", "Version 1", "Original Version"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VersionToolbar;
