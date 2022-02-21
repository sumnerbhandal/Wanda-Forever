import React, { useEffect } from "react";
import ToolTip from "../../_notification/tooltip/tooltip";
import Draggable from "react-draggable";

const HeaderSection = (props) => {
  const withinHeader = (e) => {
    props.setHeaderFocused(true);
    if (e.target.closest(".header-section-container").id === "header-section") {
      props.setFocusedSection("header");
    } else return;
  };

  const eventLogger = (e: MouseEvent, data: Object) => {
    console.log("Event: ", e);
    console.log("Data: ", data);
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
            This is a header, click here to start editing
          </div>
        </div>
        <ToolTip
          className="header"
          message="When downloaded this will appear as a header on each page"
        />
      </div>
    </>
  ) : null;
};

export default HeaderSection;
