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

const DocumentEditor = (props) => {
  const [cleanVersion, setCleanVersion] = useState(false);

  let suggestedEditBefore = (
    <>
      WHEREAS, the Recipient desires that{" "}
      <span className={!cleanVersion ? "placeholder" : null}>[X]</span>{" "}
      (“Disclosing Party”) shares certain information that is non-public,
      confidential or proprietary in nature,
    </>
  );

  let suggestedEditAfter = (
    <>
      WHEREAS, the Recipient desires that{" "}
      <span className={!cleanVersion ? "placeholder" : null}>[X]</span>{" "}
      (“Disclosing Party”) shares certain information that is non-public,{" "}
      <span className="redline">confidential or proprietary in nature,</span>
    </>
  );

  const [drawerState, setDrawerState] = useState(true);
  const [activeHover, setActiveHover] = useState(false);
  const [showProvision, setShowProvision] = useState(false);

  const [suggestedEdit, setSuggestedEdit] = useState(suggestedEditBefore);

  function drawerClose() {
    setDrawerState(!drawerState);
    setActiveHover(false);
  }

  function toggleCleanView() {
    if (!cleanVersion) {
      setDrawerState(false);
      setActiveHover(false);
    } else {
      setDrawerState(true);
    }
    setCleanVersion(!cleanVersion);

    let placeholders = document.getElementsByClassName("placeholder");
    for (var i = 0; i < placeholders.length; i++) {
      if (placeholders[i].classList.contains("hidden")) {
        placeholders[i].classList.remove("hidden");
      } else {
        placeholders[i].classList.add("hidden");
      }
    }
    let redline = document.getElementsByClassName("redline");
    if (redline !== undefined) {
      for (var j = 0; j < redline.length; j++) {
        if (redline[j].classList.contains("hidden")) {
          redline[j].classList.remove("hidden");
        } else {
          redline[j].classList.add("hidden");
        }
      }
    }
  }
  return (
    <>
      <EditorHeader
        documentName="Document File Name"
        lastEdited="Last Edited 2021/10/26"
        toggleDrawer={() => drawerClose()}
        drawerState={drawerState}
        toggleCleanView={() => toggleCleanView()}
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
            toggleDrawerHighlight={() => {
              setDrawerState(true);
              setActiveHover(true);
            }}
            setActiveHover={setActiveHover}
            activeHover={activeHover}
            suggestedEdit={suggestedEdit}
            cleanVersion={cleanVersion}
            showProvision={showProvision}
            setShowProvision={setShowProvision}
          />
        </div>
        <aside className={drawerState ? "open" : null}>
          <PlaybookContent
            setActiveHover={setActiveHover}
            suggestedEditAfter={suggestedEditAfter}
            setSuggestedEdit={setSuggestedEdit}
            setShowProvision={setShowProvision}
          />
        </aside>
      </div>
    </>
  );
};

export default DocumentEditor;
