import * as React from "react";
import Button from "../_input/button/button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom/index";
import Draft from "./_assets/Draft.svg";
import Review from "./_assets/Review.svg";
import Query from "./_assets/Query.svg";

export default function PositionedMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openDraft = () => {
    navigate("/draft");
    handleClose();
  };
  const openReview = () => {
    navigate("/review");
    handleClose();
  };
  let navigate = useNavigate();

  return (
    <div>
      <Button
        id="platform-switch-button"
        aria-controls={open ? "platform-switch-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        label={props.platform}
        variant="tertiary"
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
        <MenuItem onClick={openDraft}>
          <img alt="download icon" src={Draft} />
          Draft
        </MenuItem>
        <MenuItem onClick={openReview}>
          <img alt="download icon" src={Review} />
          Review
        </MenuItem>
        <MenuItem onClick={() => navigate("/query")}>
          <img alt="download icon" src={Query} />
          Query
        </MenuItem>
      </Menu>
    </div>
  );
}
