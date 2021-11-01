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
  const [drawerState, setDrawerState] = useState(false);
  // function showHighlightedText =

  return (
    <>
      <EditorHeader
        documentName="Document File Name"
        lastEdited="Last Edited 2021/10/26"
        toggleDrawer={() => setDrawerState(!drawerState)}
        drawerState={drawerState}
      />
      <div className="editor">
        <div
          className={
            drawerState
              ? "article-container playbook-open"
              : "article-container"
          }
        >
          {/* <div className="article-selector-button">
            <button contentEditable="false">Default</button>
          </div> */}
          <DefaultContract toggleDrawer={() => setDrawerState(true)} />
        </div>
        <aside className={drawerState ? "open" : null}>
          <PlaybookContent />
        </aside>
      </div>
    </>
  );
};

export default DocumentEditor;

// function getCharacterOffsetWithin(range, node) {
//   var treeWalker = document.createTreeWalker(
//     node,
//     NodeFilter.SHOW_TEXT,
//     function (node) {
//       var nodeRange = document.createRange();
//       nodeRange.selectNode(node);
//       return nodeRange.compareBoundaryPoints(Range.END_TO_END, range) < 1
//         ? NodeFilter.FILTER_ACCEPT
//         : NodeFilter.FILTER_REJECT;
//     },
//     false
//   );

//   var charCount = 0;
//   while (treeWalker.nextNode()) {
//     charCount += treeWalker.currentNode.length;
//   }
//   if (range.startContainer.nodeType == 3) {
//     charCount += range.startOffset;
//   }
//   return charCount;
// }

// function handleKeyPress(e) {
//   var key = e.keyCode || e.which;
//   if (key == 8 || key == 46) {
//     e.preventDefault();
//     var range = window.getSelection().getRangeAt(0);
//     const position = getCharacterOffsetWithin(range, e.target);
//     console.log(position);
//   }
// }

// function toggleDrawer() {
//   console.log("clicked");
//   setDrawerState(true);
// }
