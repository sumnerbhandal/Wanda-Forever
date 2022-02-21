import React from "react";
import ToolTip from "../../_notification/tooltip/tooltip";
import Draggable from "react-draggable";

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
            <Draggable
              axis="both"
              handle=".placeholder"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[1, 1]}
              scale={1}
              bounds="parent"
              // onStart={eventLogger}
              // onDrag={eventLogger}
              // onStop={eventLogger}
            >
              <span contentEditable="false" className="placeholder">
                Page #
              </span>
            </Draggable>
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
