import React, { useState, useEffect } from "react";

import "../styles.scss";
import EditableBlock from "./editable-block";

import uid from "./uid";
import { setCaretToEnd } from "./caret-helpers";
import GenericNda from "../../_api/nda/nda.json";

const initialBlock = { id: uid(), html: "", tag: "p" };

const EditablePage = () => {
  // const [contractDemo, setContractDemo] = useState(null);
  // useEffect(() => {
  //   fetch("./nda.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setContractDemo(data.NDA);
  //     });
  // }, []);

  const [blocks, setBlocks] = useState([initialBlock]);

  function updatePageHandler(updatedBlock) {
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      html: updatedBlock.html
    };
    setBlocks(updatedBlocks);
    console.log(blocks);
  }

  function addBlockHandler(currentBlock) {
    const newBlock = { id: uid(), html: "", tag: "p" };
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index + 1, 0, newBlock);
    setBlocks(updatedBlocks);
    currentBlock.ref.nextElementSibling.focus();
  }

  function deleteBlockHandler(currentBlock) {
    // Only delete the block, if there is a preceding one
    const previousBlock = currentBlock.ref.previousElementSibling;
    if (previousBlock) {
      const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
      const updatedBlocks = [...blocks];
      updatedBlocks.splice(index, 1);
      setBlocks(updatedBlocks);
      setCaretToEnd(previousBlock);
      previousBlock.focus();
      console.log(blocks);
      console.log(updatedBlocks);
    }
  }

  return (
    <div className="contract">
      {!GenericNda.NDA ? (
        <p>Loading</p>
      ) : (
        GenericNda.NDA.map((item, index) => (
          <EditableBlock
            key={index}
            tag={item.tag}
            html={item.block}
            updatePage={updatePageHandler}
            addBlock={addBlockHandler}
            deleteBlock={deleteBlockHandler}
          />
        ))
      )}
      {!blocks ? (
        <p>Loading</p>
      ) : (
        blocks.map((block, key) => {
          <EditableBlock
            key={key}
            id={block.id}
            tag={block.tag}
            html={block.html}
            updatePage={updatePageHandler}
            addBlock={addBlockHandler}
            deleteBlock={deleteBlockHandler}
          />;
        })
      )}

      <p>Test</p>
    </div>
  );
};

export default EditablePage;
