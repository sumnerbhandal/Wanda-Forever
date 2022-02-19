import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../../_input/button/button";
import FooterIcon from "../../_assets/Footer.svg";

const FooterButton = (
  <>
    <img alt="Footer icon" src={FooterIcon} /> {"  "}Footer
  </>
);

const FooterButtonFeature = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const insertFooter = () => {
    handleClose();
    props.setFooterSection(true);
  };

  const removeFooter = () => {
    handleClose();
    props.setFooterSection(false);
  };

  return (
    <>
      <Button
        contentEditable="false"
        variant="secondary"
        label={FooterButton}
        onClick={handleClick}
      />
      {!props.footerSection ? (
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
          <MenuItem onClick={insertFooter}>Insert Footer</MenuItem>
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
          <MenuItem onClick={removeFooter}>Remove Footer</MenuItem>
        </Menu>
      )}
    </>
  );
};

export default FooterButtonFeature;
