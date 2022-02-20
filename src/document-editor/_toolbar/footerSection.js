import React from "react";

const FooterSection = (props) => {
  return props.footerSection ? (
    <>
      <div className="header-section-container">
        <div className="header-section footer" contentEditable="true">
          <div className="header-contents">Footer Section</div>
        </div>
      </div>
    </>
  ) : null;
};

export default FooterSection;
