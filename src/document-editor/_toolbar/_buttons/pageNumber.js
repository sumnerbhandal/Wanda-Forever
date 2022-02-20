import React, { useState, useEffect } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../../_input/button/button";
import InsertIcon from "../../_assets/Insert.svg";

const PageButton = (
  <>
    <img alt="Header icon" src={InsertIcon} /> {"  "}Page Number
  </>
);

const PageButtonFeature = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [condition, setCondition] = useState();

  useEffect(() => {
    if (props.focusedSection === "header") {
      setCondition(props.headerPageNumber);
    } else if (props.focusedSection === "footer") {
      setCondition(props.footerPageNumber);
    }
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const insertPageRef = () => {
    handleClose();
    if (props.focusedSection === "header") {
      props.setHeaderPageNumber(true);
    } else if (props.focusedSection === "footer") {
      props.setFooterPageNumber(true);
    } else return;
  };

  const removePageRef = () => {
    handleClose();
    if (props.focusedSection === "header") {
      props.setHeaderPageNumber(false);
    } else if (props.focusedSection === "footer") {
      props.setFooterPageNumber(false);
    } else return;
  };

  // const removeHeader = () => {
  //   handleClose();
  //   props.setHeaderSection(false);
  // };

  return (
    <>
      <Button
        contentEditable="false"
        variant="secondary"
        label={PageButton}
        onClick={handleClick}
      />
      {!condition ? (
        <Menu
          id="platform-switch-menu"
          aria-labelledby="platform-switch-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
        >
          <MenuItem onClick={insertPageRef}>Insert Page Number</MenuItem>
        </Menu>
      ) : (
        <Menu
          id="platform-switch-menu"
          aria-labelledby="platform-switch-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left"
          }}
        >
          {/* <MenuItem onClick={insertHeader}>Edit Header</MenuItem> */}
          <MenuItem onClick={removePageRef}>Remove Page Number</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default PageButtonFeature;
