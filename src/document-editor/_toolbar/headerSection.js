import React, { useEffect } from "react";
import ToolTip from "../../_notification/tooltip/tooltip";

const HeaderSection = (props) => {
  const withinHeader = (e) => {
    props.setHeaderFocused(true);
    if (e.target.closest(".header-section-container").id === "header-section") {
      props.setFocusedSection("header");
    } else return;
  };

  return props.headerSection ? (
    <>
      <div
        id="header-section"
        onClick={withinHeader}
        className="header-section-container"
      >
        <div
          className={`header-section ${props.headerFocused ? "" : "scrolled"}`}
          contentEditable="true"
        >
          {props.headerPageNumber ? (
            <span contentEditable="false" className="placeholder">
              Page #
            </span>
          ) : null}
          <div className="header-contents">
            This is a header, click here to start editing
          </div>
        </div>
        <ToolTip
          className="header"
          message="When downloaded this will appear as a header on each page"
        />
      </div>
    </>
  ) : null;
};

export default HeaderSection;
