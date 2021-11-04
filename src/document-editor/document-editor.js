import React, { useState } from "react";
import EditorHeader from "../_header/editor-header";
import "./styles.scss";
import PlaybookContent from "./playbook";
import DefaultContract from "./_contract-types/default";
import Button from "../_input/button/button";

const LabelPreview = (props) => {
  return (
    <>
      <Button
        contentEditable="false"
        variant="primary"
        label="Provision Example"
      />
      <Button
        contentEditable="false"
        variant="secondary"
        label="Close Preview"
      />
    </>
  );
};

const suggestedEditBefore = (
  <>
    WHEREAS, the Recipient desires that <span className="placeholder">[X]</span>{" "}
    (“Disclosing Party”) shares certain information that is non-public,
    confidential or proprietary in nature,
  </>
);

const suggestedEditAfter = (
  <>
    WHEREAS, the Recipient desires that <span className="placeholder">[X]</span>{" "}
    (“Disclosing Party”) shares certain information that is non-public,{" "}
    <span className="redline">confidential or proprietary in nature,</span>
  </>
);

const DocumentEditor = (props) => {
  const [drawerState, setDrawerState] = useState(false);
  const [activeHover, setActiveHover] = useState(false);
  const [suggestedEdit, setSuggestedEdit] = useState(suggestedEditBefore);

  function drawerClose() {
    setDrawerState(!drawerState);
    setActiveHover(false);
  }

  return (
    <>
      <EditorHeader
        documentName="Document File Name"
        lastEdited="Last Edited 2021/10/26"
        toggleDrawer={() => drawerClose()}
        drawerState={drawerState}
      />
      <div className="editor">
        <div
          id="article-container"
          className={
            drawerState
              ? "article-container playbook-open"
              : "article-container"
          }
        >
          {/* <div className="article-selector-button">
            <button contentEditable="false">Default</button>
          </div> */}
          <DefaultContract
            toggleDrawer={() => setDrawerState(true)}
            setActiveHover={setActiveHover}
            activeHover={activeHover}
            suggestedEdit={suggestedEdit}
          />
        </div>
        <aside className={drawerState ? "open" : null}>
          <PlaybookContent
            setActiveHover={setActiveHover}
            suggestedEditAfter={suggestedEditAfter}
            setSuggestedEdit={setSuggestedEdit}
          />
        </aside>
      </div>
    </>
  );
};

export default DocumentEditor;
