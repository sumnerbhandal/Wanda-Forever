import React from "react";

const FooterSection = (props) => {
  return props.footerSection ? (
    <>
      <div className="header-section footer">
        <div className="header-contents">Footer Section</div>
      </div>
    </>
  ) : null;
};

export default FooterSection;
