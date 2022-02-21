import React, { useRef, useEffect } from "react";
import "./styles.scss";

function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log(ref.current);
        ref.current.classList.add("hide");
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

const ToolTip = (props) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div
      ref={wrapperRef}
      className={`tooltip ${props.className}`}
      role="alert"
      onBlur={props.onBlur}
    >
      {props.message}
    </div>
  );
};

export default ToolTip;
