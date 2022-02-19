import React from "react";
const HeaderSection = (props) => {
  return props.headerSection ? (
    <>
      <div className="header-section">
        <div className="header-contents">Header Section</div>
      </div>
    </>
  ) : null;
};

export default HeaderSection;
