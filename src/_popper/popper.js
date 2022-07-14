import React, { useState, useEffect, useRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Popper from "@mui/material/Popper";
import Button from "../_input/button/button";
import { debounce } from "lodash";
import "./styles.scss";

const PopperSuggestion = (props) => {
  const [anchorEl, setAnchorEl] = useState();
  const [changed, setChanged] = useState(false);
  const [reason, showReason] = useState(false);

  const oldText = props.text;

  const [text, setText] = useState(oldText);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const revealReason = () => {
    reason ? showReason(false) : showReason(true);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const closePopper = (event) => {
    console.log("left");
    if (event.target.classList.contains("text-suggestion")) {
      return;
    } else {
      setAnchorEl(false);
    }
  };

  const updateText = (event) => {
    setText(
      <>
        <span className="redline">{oldText}</span>
        <span className="blueline">{event.target.innerHTML}</span>
      </>
    );
    setChanged(true);
    setAnchorEl(false);
  };

  function handlOnMouseLeave() {
    setAnchorEl(false);
    showReason(false);
  }
  const debouncedHandleMouseLeave = debounce(() => handlOnMouseLeave(), 600);

  const handlOnMouseEnter = (event) => {
    if (!changed) {
      debouncedHandleMouseLeave.cancel();
      if (anchorEl === undefined || anchorEl === false) {
        handleClick(event);
      } else {
        return;
      }
    } else {
      return;
    }
  };

  const dismissSuggestion = () => {
    setChanged(true);
    setAnchorEl(false);
  };

  return (
    <>
      <span
        className={`text-suggestion ${changed ? "actioned" : ""}`}
        aria-describedby={id}
        onClick={!changed ? handleClick : null}
        onMouseOver={handlOnMouseEnter}
        onMouseLeave={() => debouncedHandleMouseLeave()}
      >
        {text}
      </span>
      <ClickAwayListener onClickAway={closePopper}>
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
          onMouseOver={handlOnMouseEnter}
          onMouseLeave={() => debouncedHandleMouseLeave()}
        >
          <div
            id="popper-content"
            className={`popper-content ${reason ? "flipped" : ""}`}
            contentEditable="false"
          >
            <div
              className={`popper-content-section ${
                reason ? "hidden" : "flipped"
              }`}
            >
              <div className="popper-title">
                <p>{props.title}</p>
                <div className="actions">
                  <img
                    alt="info"
                    src="https://raw.githubusercontent.com/sumnerbhandal/font-repo/d20d2a5982a590f604cddd654f00376303401cab/fi_info.svg"
                    onClick={revealReason}
                  />
                  <img
                    alt="dismiss"
                    src="https://raw.githubusercontent.com/sumnerbhandal/font-repo/48771af2cdcdecd7e7e295f4dd9d1757215ec00c/fi_slash.svg"
                    onClick={dismissSuggestion}
                  />
                </div>
              </div>
              {typeof props.suggestedText == "string" ? (
                <Button
                  contentEditable="false"
                  variant="text menu-item"
                  label={props.suggestedText}
                  onClick={updateText}
                />
              ) : (
                <>
                  {props.suggestedText.map((item, key) => (
                    <Button
                      key={key}
                      contentEditable="false"
                      variant="text menu-item"
                      label={item}
                      onClick={updateText}
                    />
                  ))}
                </>
              )}
            </div>
            <div
              className={`popper-content-section back ${
                reason ? "flipped" : "hidden"
              }`}
            >
              <div className="popper-title">
                <img
                  alt="info"
                  src="https://raw.githubusercontent.com/sumnerbhandal/font-repo/81efbf014aa26994688846e07f6d6ecee6ca8215/fi_arrow-left-circle.svg"
                  onClick={revealReason}
                />
                <p>Issue</p>
              </div>

              <p>{props.explainer}</p>
            </div>
          </div>
        </Popper>
      </ClickAwayListener>
    </>
  );
};

export default PopperSuggestion;
