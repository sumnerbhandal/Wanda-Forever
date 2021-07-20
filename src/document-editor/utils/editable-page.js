import React, { Component, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import "../styles.scss";
import EditableBlock from "./editable-block";

import uid from "./uid";
import { setCaretToEnd } from "./caret-helpers";

import GenericNda from "../../_api/nda/nda.json";

const initialBlock = { id: uid(), html: "example", tag: "p" };

// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",

  // change background colour if dragging
  background: isDragging ? "#e6e6e6" : null,

  // styles we need to apply on draggables
  ...draggableStyle
});

// const getListStyle = (isDraggingOver) => ({
//   background: isDraggingOver ? "lightblue" : "lightgrey"
// });

const EditablePage = (props) => {
  const [blocks, setBlocks] = useState([initialBlock]);

  useEffect(() => {
    setBlocks(GenericNda.NDA);
  }, []);

  // componentDidMount() {
  //   this.setState({ blocks: GenericNda.NDA });
  //   console.log();
  // }

  // componentDidUpdate() {
  //   const length = this.state.blocks.length;
  //   // this.setState({ items: getItems(length) });
  // }

  function updatePageHandler(updatedBlock) {
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      html: updatedBlock.html
    };
    setBlocks(updatedBlocks);
  }

  function addBlockHandler(e) {
    const newBlock = { id: uid(), html: "", tag: "p" };
    const index = blocks.map((b) => b.id).indexOf(e.id);
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index + 1, 0, newBlock);

    setBlocks(updatedBlocks);
    const currentNode = e.ref;

    setTimeout(function () {
      currentNode.parentNode.nextElementSibling.firstChild.focus();
    }, 0);
  }

  function deleteBlockHandler(e) {
    // Only delete the block, if there is a preceding one
    const previousBlock = e.ref.parentNode.previousElementSibling.firstChild;
    console.log(previousBlock.parentNode);
    if (previousBlock) {
      const index = blocks.map((b) => b.id).indexOf(e.id);
      const updatedBlocks = [...blocks];
      updatedBlocks.splice(index, 1);
      setBlocks(updatedBlocks);
      setCaretToEnd(previousBlock);
      setTimeout(function () {
        previousBlock.focus();
      }, 0);
    }
  }

  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      blocks,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }

  return (
    <div className="contract">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              // style={getListStyle(snapshot.isDraggingOver)}
            >
              {blocks.map((block, key) => (
                <Draggable
                  className="list-reorder"
                  key={block.id}
                  draggableId={block.id}
                  index={key}
                  tabIndex="-1"
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                      tabIndex="-1"
                    >
                      <EditableBlock
                        key={key}
                        id={block.id}
                        tag={block.tag}
                        html={block.html}
                        updatePage={updatePageHandler}
                        addBlock={addBlockHandler}
                        deleteBlock={deleteBlockHandler}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default EditablePage;
