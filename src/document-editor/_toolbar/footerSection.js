import React from "react";
import ToolTip from "../../_notification/tooltip/tooltip";

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
              Page #
            </span>
          ) : null}
          <div className="header-contents">
            This is a footer, click here to start editing
          </div>
        </div>
        <ToolTip
          className="footer"
          message="When downloaded this will appear as a footer on each page"
        />
      </div>
    </>
  ) : null;
};

export default FooterSection;
