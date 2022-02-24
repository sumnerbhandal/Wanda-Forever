import React, { useState, useEffect } from "react";
import Button from "../../_input/button/button";
import HeaderButtonFeature from "./_buttons/headerButton";
import FooterButtonFeature from "./_buttons/footerButton";
import HistoryButtonFeature from "./_buttons/seeVersionHistory";
import InsertButtonFeature from "./_buttons/insertButton";
import PageButtonFeature from "./_buttons/pageNumber";

const EditorToolbar = (props) => {
  const [modTools, setModTools] = useState(props.headerFocused);
  const [regularTools, setRegularTools] = useState(props.contractFocused);

  useEffect(() => {
    props.headerFocused || props.footerFocused
      ? setModTools(true)
      : setModTools(false);

    props.contractFocused ? setRegularTools(true) : setRegularTools(false);
  });

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
      <div className={`document-toolbar ${props.historyView ? "history" : ""}`}>
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
            {/* <HistoryButtonFeature
              headerSection={props.headerSection}
              setHeaderSection={props.setHeaderSection}
            /> */}
          </div>
          <div
            className={`modify-toolbar ${
              modTools || regularTools ? "" : "disabled"
            }`}
          >
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

            {!modTools ? (
              <InsertButtonFeature
                setHeaderPageNumber={props.setHeaderPageNumber}
                setFooterPageNumber={props.setFooterPageNumber}
                focusedSection={props.focusedSection}
              />
            ) : (
              <PageButtonFeature
                setHeaderPageNumber={props.setHeaderPageNumber}
                setFooterPageNumber={props.setFooterPageNumber}
                focusedSection={props.focusedSection}
                headerPageNumber={props.headerPageNumber}
                footerPageNumber={props.footerPageNumber}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorToolbar;
