import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../../_input/button/button";
import HeaderIcon from "../../_assets/Header.svg";

const HeaderButton = (
  <>
    <img alt="Header icon" src={HeaderIcon} /> {"  "}Header
  </>
);

const HeaderButtonFeature = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const insertHeader = () => {
    handleClose();
    props.setHeaderSection(true);
  };

  const removeHeader = () => {
    handleClose();
    props.setHeaderSection(false);
  };

  return (
    <>
      <Button
        contentEditable="false"
        variant="secondary"
        label={HeaderButton}
        onClick={handleClick}
      />
      {!props.headerSection ? (
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
          <MenuItem onClick={insertHeader}>Insert Header</MenuItem>
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
          <MenuItem onClick={removeHeader}>Remove Header</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default HeaderButtonFeature;
