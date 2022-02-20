import React from "react";

const FooterSection = (props) => {
  return props.footerSection ? (
    <>
      <div
        onClick={() => props.setContractFocused(false)}
        className="header-section-container"
        contentEditable="true"
      >
        <div
          className={`header-section footer ${
            props.contractFocused ? "scrolled" : ""
          }`}
        >
          <div className="header-contents">Footer Section</div>
        </div>
      </div>
    </>
  ) : null;
};

export default FooterSection;
