import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Button from "../_input/button/button";
import "./styles.scss";

const PopperSuggestion = (props) => {
  const [anchorEl, setAnchorEl] = useState();

  const [changed, setChanged] = useState(false);

  const oldText = props.text;
  const newText = props.suggestedText;

  const [text, setText] = useState(oldText);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  // function useOutsideAlerter(ref, e) {
  //   useEffect(() => {
  //     function handleClickOutside(event) {
  //       console.log(event.target.id);
  //       if (
  //         event.target.id !== "simple-popper" ||
  //         event.target.id !== "popper-content"
  //       ) {
  //         setAnchorEl(null);
  //       }
  //     }
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }

  const updateText = (props) => {
    setText(oldText + newText);
    setChanged(true);
  };

  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);

  return (
    <>
      <span
        className={`text-suggestion ${changed ? "actioned" : null}`}
        aria-describedby={id}
        onClick={handleClick}
      >
        {text}
      </span>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal={true}
        modifiers={[
          {
            name: "flip",
            enabled: false,
            options: {
              altBoundary: true,
              rootBoundary: "viewport",
              padding: 8
            }
          },
          {
            name: "preventOverflow",
            enabled: false,
            options: {
              altAxis: true,
              altBoundary: true,
              tether: true,
              rootBoundary: "viewport",
              padding: 8
            }
          }
        ]}
      >
        {/* <div className="popper-content" wrapperRef={wrapperRef}> */}
        <div id="popper-content" className="popper-content">
          <Button
            contentEditable="false"
            variant="text"
            label={props.suggestedText}
            onClick={updateText}
          />
        </div>
      </Popper>
    </>
  );
};

export default PopperSuggestion;
