import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "../../_input/button/button";
import HeaderIcon from "../_assets/Header.svg";
import FooterIcon from "../_assets/Footer.svg";
import InsertIcon from "../_assets/Insert.svg";
import HeaderButtonFeature from "./_buttons/headerButton";
import FooterButtonFeature from "./_buttons/footerButton";
import InsertButtonFeature from "./_buttons/insertButton";

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

  const makeBold = (e) => {
    e.preventDefault();
    document.execCommand("bold");
  };

  const makeItalic = (e) => {
    e.preventDefault();
    document.execCommand("italic");
  };
  const makeUnderlined = (e) => {
    e.preventDefault();
    document.execCommand("underline");
  };

  return (
    <div className="document-toolbar-container">
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
                onClick={makeBold}
              />
              <Button
                contentEditable="false"
                variant="secondary italic"
                label="i"
                onClick={makeItalic}
              />
              <Button
                contentEditable="false"
                variant="secondary underline"
                label="U"
                onClick={makeUnderlined}
              />
            </div>
            <hr />
            <InsertButtonFeature
              setHeaderPageNumber={props.setHeaderPageNumber}
              setFooterPageNumber={props.setFooterPageNumber}
              focusedSection={props.focusedSection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorToolbar;
