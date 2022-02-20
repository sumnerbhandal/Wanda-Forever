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
          <div className="header-contents">
            Header Section{" "}
            {props.headerPageNumber ? (
              <span contentEditable="false" className="placeholder">
                # Page Number
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default HeaderSection;
