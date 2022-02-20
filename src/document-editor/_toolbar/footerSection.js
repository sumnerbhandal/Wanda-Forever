import React from "react";

const FooterSection = (props) => {
  const withinFooter = (e) => {
    props.setFooterFocused(true);
    if (e.target.closest(".header-section-container").id === "footer-section") {
      props.setFocusedSection("footer");
    } else return;
  };
  return props.footerSection ? (
    <>
      <div
        onClick={withinFooter}
        className="header-section-container footer"
        id="footer-section"
      >
        <div
          className={`header-section footer ${
            props.footerFocused ? "" : "scrolled"
          }`}
          contentEditable="true"
        >
          {props.footerPageNumber ? (
            <span contentEditable="false" className="placeholder">
              Page#
            </span>
          ) : null}
          <div className="header-contents">Footer Section </div>
        </div>
      </div>
    </>
  ) : null;
};

export default FooterSection;
