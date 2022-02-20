import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../../_input/button/button";
import InsertIcon from "../../_assets/Insert.svg";

const InsertButton = (
  <>
    <img alt="Header icon" src={InsertIcon} /> {"  "}Insert
  </>
);

const InsertButtonFeature = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
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

  // const removeHeader = () => {
  //   handleClose();
  //   props.setHeaderSection(false);
  // };

  return (
    <>
      <Button
        contentEditable="false"
        variant="secondary"
        label={InsertButton}
        onClick={handleClick}
      />
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
        <MenuItem onClick={insertPageRef}>Page Number</MenuItem>
      </Menu>
    </>
  );
};

export default InsertButtonFeature;
