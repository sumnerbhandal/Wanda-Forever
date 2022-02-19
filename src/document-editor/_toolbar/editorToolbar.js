import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../_input/button/button";
import HeaderIcon from "../_assets/Header.svg";
import FooterIcon from "../_assets/Footer.svg";
import InsertIcon from "../_assets/Insert.svg";
import HeaderButtonFeature from "./_buttons/headerButton";
import FooterButtonFeature from "./_buttons/footerButton";

const InsertElement = (
  <>
    <img alt="Header icon" src={InsertIcon} /> {"  "}Insert
  </>
);

const EditorToolbar = (props) => {
  // const insertFooter = () => {
  //   handleClose();
  //   props.setFooterSection(true);
  // };

  // const removeFooter = () => {
  //   handleClose();
  //   props.setFooterSection(false);
  // };

  return (
    <div className="document-toolbar">
      <div className="action-container">
        <div className="footer-header-button-container">
          <HeaderButtonFeature
            headerSection={props.headerSection}
            setHeaderSection={props.setHeaderSection}
          />
          <FooterButtonFeature
            footerSection={props.footerSection}
            setFooterSection={props.setFooterSection}
          />
        </div>
        <div className="modify-toolbar">
          <div className="format-container">
            <Button
              contentEditable="false"
              variant="secondary bold"
              label="B"
            />
            <Button
              contentEditable="false"
              variant="secondary italic"
              label="i"
            />
            <Button
              contentEditable="false"
              variant="secondary underline"
              label="U"
            />
          </div>
          <Button
            contentEditable="false"
            variant="secondary"
            label={InsertElement}
            // onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorToolbar;
