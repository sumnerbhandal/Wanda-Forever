import React, { useState, useEffect, useRef } from "react";
// import EditorHeader from "../_header/editor-header";
import HistoryHeader from "../_header/version-header";
import "../document-editor/styles.scss";
import "./styles.scss";
import PlaybookContent from "../document-editor/playbook";
import EmploymentContract from "./_contract-types/employment-query";
import Button from "../_input/button/button";
import { useLocation } from "react-router-dom";

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

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const QueryEditor = (props) => {
  const [cleanVersion, setCleanVersion] = useState(false);
  const [drawerState, setDrawerState] = useState(true);
  const [activeHover, setActiveHover] = useState(false);
  const [showProvision, setShowProvision] = useState(false);
  const [footerFocused, setFooterFocused] = useState(false);

  const location = useLocation();
  const ContractType = location.pathname.split("_")[1];

  let suggestedEditBefore = (
    <>
      WHEREAS, the Recipient desires that{" "}
      <span className={!cleanVersion ? "placeholder" : null}>[X]</span>{" "}
      (“Disclosing Party”) shares certain information that is non-public,
      confidential or proprietary in nature,
    </>
  );

  return (
    <>
      <div className="editor query">
        <div
          id="article-container"
          className={
            drawerState
              ? "article-container playbook-open"
              : "article-container"
          }
        >
          {ContractType === "employment" ? (
            <EmploymentContract
              toggleDrawer={() => setDrawerState(true)}
              toggleDrawerHighlight={() => {
                setDrawerState(true);
                setActiveHover(true);
              }}
              setActiveHover={setActiveHover}
              activeHover={activeHover}
              setShowProvision={setShowProvision}
            />
          ) : (
            <p>Not an employment contract</p>
          )}
        </div>
        <aside className="open">Label Toolbar</aside>
      </div>
    </>
  );
};

export default QueryEditor;
