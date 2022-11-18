import React, { useState, useEffect, useRef } from "react";
import EditorHeader from "../_header/editor-header";
import HistoryHeader from "../_header/version-header";
import "./styles.scss";
import PlaybookContent from "./playbook";
import HistoryDemo from "./history-demo";
import DefaultContract from "./_contract-types/default";
import VersionOne from "./_contract-types/version1";
import Button from "../_input/button/button";
import HeaderSection from "./_toolbar/headerSection";
import FooterSection from "./_toolbar/footerSection";
import EditorToolbar from "./_toolbar/editorToolbar";
import VersionToolbar from "./_toolbar/versionCompare";

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
  const [headerSection, setHeaderSection] = useState(false);
  const [footerSection, setFooterSection] = useState(false);
  const [drawerState, setDrawerState] = useState(true);
  const [activeHover, setActiveHover] = useState(false);
  const [showProvision, setShowProvision] = useState(false);
  const [headerFocused, setHeaderFocused] = useState(false);
  const [footerFocused, setFooterFocused] = useState(false);
  const [contractFocused, setContractFocused] = useState(false);
  const [headerPageNumber, setHeaderPageNumber] = useState(false);
  const [footerPageNumber, setFooterPageNumber] = useState(false);
  const [focusedSection, setFocusedSection] = useState();

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
    setFooterFocused(true);
    setHeaderFocused(true);

    let placeholders = document.getElementsByClassName("placeholder");
    for (var i = 0; i < placeholders.length; i++) {
      if (placeholders[i].classList.contains("hidden")) {
        placeholders[i].classList.remove("hidden");
      } else {
        placeholders[i].classList.add("hidden");
      }
    }
    let findandreplace = document.getElementsByClassName("text-suggestion");
    for (var k = 0; k < findandreplace.length; k++) {
      if (findandreplace[k].classList.contains("hidden")) {
        findandreplace[k].classList.remove("hidden");
      } else {
        findandreplace[k].classList.add("hidden");
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
    let blueline = document.getElementsByClassName("blueline");
    if (blueline !== undefined) {
      for (var l = 0; l < blueline.length; l++) {
        if (blueline[l].classList.contains("hidden")) {
          blueline[l].classList.remove("hidden");
        } else {
          blueline[l].classList.add("hidden");
        }
      }
    }
  }
  const [historyView, setHistoryView] = useState(false);

  const versionView = () => {
    setHistoryView(!historyView);
    setCleanVersion(true);
    // setHeaderSection(true);
    // setFooterSection(true);
  };

  const newDrag = (e) => {
    let wrapper = document.getElementById("editor");

    var boxA = wrapper.querySelector(".box");

    // Get offset
    var containerOffsetLeft = wrapper.offsetLeft;

    // Get x-coordinate of pointer relative to container
    var pointerRelativeXpos = e.clientX - containerOffsetLeft;

    // Arbitrary minimum width set on box A, otherwise its inner content will collapse to width of 0
    var boxAminWidth = 60;
    console.log(pointerRelativeXpos);

    // Resize box A
    // * 8px is the left/right spacing between .handler and its inner pseudo-element
    // * Set flex-grow to 0 to prevent it from growing
    boxA.style.width = pointerRelativeXpos - 8 + "px";
    boxA.style.flexGrow = 0;
  };

  return (
    <>
      {historyView ? (
        <HistoryHeader
          documentName="Document File Name"
          lastEdited="Last Edited 2021/10/26"
          toggleDrawer={() => drawerClose()}
          drawerState={drawerState}
          toggleCleanView={() => toggleCleanView()}
          setHistoryView={versionView}
          user={props.user}
        />
      ) : (
        <EditorHeader
          documentName="Document File Name"
          lastEdited="Last Edited 2021/10/26"
          toggleDrawer={() => drawerClose()}
          drawerState={drawerState}
          toggleCleanView={() => toggleCleanView()}
          setHistoryView={versionView}
          user={props.user}
        />
      )}
      <div id="editor" className="editor">
        <div
          id="article-container"
          className={
            !drawerState
              ? "article-container playbook-open box"
              : "article-container box"
          }
        >
          {" "}
          {historyView ? (
            <VersionToolbar
              headerSection={headerSection}
              setHeaderSection={setHeaderSection}
              footerSection={footerSection}
              setFooterSection={setFooterSection}
              headerPageNumber={headerPageNumber}
              setHeaderPageNumber={setHeaderPageNumber}
              footerPageNumber={footerPageNumber}
              setFooterPageNumber={setFooterPageNumber}
              setFocusedSection={setFocusedSection}
              focusedSection={focusedSection}
              headerFocused={headerFocused}
              footerFocused={footerFocused}
              contractFocused={contractFocused}
            />
          ) : (
            <EditorToolbar
              headerSection={headerSection}
              setHeaderSection={setHeaderSection}
              footerSection={footerSection}
              setFooterSection={setFooterSection}
              headerPageNumber={headerPageNumber}
              setHeaderPageNumber={setHeaderPageNumber}
              footerPageNumber={footerPageNumber}
              setFooterPageNumber={setFooterPageNumber}
              setFocusedSection={setFocusedSection}
              focusedSection={focusedSection}
              headerFocused={headerFocused}
              footerFocused={footerFocused}
              contractFocused={contractFocused}
            />
          )}
          <HeaderSection
            headerSection={headerSection}
            headerFocused={headerFocused}
            setHeaderFocused={setHeaderFocused}
            headerPageNumber={headerPageNumber}
            setHeaderPageNumber={setHeaderPageNumber}
            setFocusedSection={setFocusedSection}
            historyView={historyView}
          />
          <FooterSection
            footerSection={footerSection}
            footerFocused={footerFocused}
            setFooterFocused={setFooterFocused}
            footerPageNumber={footerPageNumber}
            setFooterPageNumber={setFooterPageNumber}
            setFocusedSection={setFocusedSection}
          />{" "}
          {historyView ? (
            <VersionOne
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
              footerFocused={footerFocused}
              setFooterFocused={setFooterFocused}
              headerFocused={headerFocused}
              setHeaderFocused={setHeaderFocused}
              setContractFocused={setContractFocused}
            />
          ) : (
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
              footerFocused={footerFocused}
              setFooterFocused={setFooterFocused}
              headerFocused={headerFocused}
              setHeaderFocused={setHeaderFocused}
              setContractFocused={setContractFocused}
            />
          )}
        </div>

        <aside id="Resizable" className={drawerState ? "open box" : "box"}>
          <div className="handler" draggable="true" onDrag={newDrag}></div>
          {historyView ? (
            <HistoryDemo
              setActiveHover={setActiveHover}
              suggestedEditAfter={suggestedEditAfter}
              setSuggestedEdit={setSuggestedEdit}
              setShowProvision={setShowProvision}
            />
          ) : (
            <PlaybookContent
              setActiveHover={setActiveHover}
              suggestedEditAfter={suggestedEditAfter}
              setSuggestedEdit={setSuggestedEdit}
              setShowProvision={setShowProvision}
            />
          )}
        </aside>
      </div>
    </>
  );
};

export default DocumentEditor;
