import React from "react";

const HeaderSection = (props) => {
  console.log(props.contractFocused);
  return props.headerSection ? (
    <>
      <div
        onClick={() => props.setContractFocused(false)}
        className="header-section-container"
        contentEditable="true"
      >
        <div
          className={`header-section ${
            props.contractFocused ? "scrolled" : ""
          }`}
        >
          <div className="header-contents">Header Section</div>
        </div>
      </div>
    </>
  ) : null;
};

export default HeaderSection;
