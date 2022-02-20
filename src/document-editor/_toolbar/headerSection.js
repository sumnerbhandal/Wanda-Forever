import React from "react";

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
              Page#
            </span>
          ) : null}
          <div className="header-contents">Header Section </div>
        </div>
      </div>
    </>
  ) : null;
};

export default HeaderSection;
