// import React, { useState, createRef, useEffect } from "react";
// import ContentEditable from "react-contenteditable";

// import "../styles.scss";
// import SelectMenu from "./select-menu";

// import { getCaretCoordinates, setCaretToEnd } from "./caret-helpers";

// const CMD_KEY = "/";

// const EditableBlock = (props) => {
//   const [state, setState] = useState({
//     htmlBackup: null,
//     html: "",
//     tag: "p",
//     previousKey: "",
//     selectMenuIsOpen: false,
//     selectMenuPosition: {
//       x: null,
//       y: null
//     }
//   });
//   const [bullets, setBullets] = useState(state.html);
//   const contentEditable = createRef();

//   useEffect(() => {
//     setState({ html: props.html, tag: props.tag });
//   }, []);

//   // Update the page component if one of the following is true:
//   // 1. user has changed the html content
//   // 2. user has changed the tag
//   function componentDidUpdate(prevProps, prevState) {
//     const htmlChanged = prevState.html !== this.state.html;
//     const tagChanged = prevState.tag !== this.state.tag;
//     if (htmlChanged || tagChanged) {
//       this.props.updatePage({
//         id: this.props.id,
//         html: this.state.html,
//         tag: this.state.tag
//       });
//     }
//   }

//   function onChangeHandler(e) {
//     this.setState({ html: e.target.value });
//   }

//   function onKeyDownHandler(e) {
//     if (e.key === CMD_KEY) {
//       // If the user starts to enter a command, we store a backup copy of
//       // the html. We need this to restore a clean version of the content
//       // after the content type selection was finished.
//       this.setState({ htmlBackup: this.state.html });
//     }
//     if (e.key === "Enter") {
//       // While pressing "Enter" should add a new block to the page, we
//       // still want to allow line breaks by pressing "Shift-Enter"
//       if (this.state.previousKey !== "Shift" && !this.state.selectMenuIsOpen) {
//         e.preventDefault();
//         this.props.addBlock({
//           id: this.props.id,
//           ref: this.contentEditable.current
//         });
//       }
//     }
//     if (e.key === "Backspace" && !this.state.html) {
//       // If there is no content, we delete the block by pressing "Backspace",
//       // just as we would remove a line in a regular text container
//       e.preventDefault();
//       this.props.deleteBlock({
//         id: this.props.id,
//         ref: this.contentEditable.current
//       });
//     }
//     // Store the key to detect combinations like "Shift-Enter" later on
//     this.setState({ previousKey: e.key });
//   }

//   // The openSelectMenuHandler function needs to be invoked on key up. Otherwise
//   // the calculation of the caret coordinates does not work properly.
//   function onKeyUpHandler(e) {
//     if (e.key === CMD_KEY) {
//       this.openSelectMenuHandler();
//     }
//   }

//   // After openening the select menu, we attach a click listener to the dom that
//   // closes the menu after the next click - regardless of outside or inside menu.
//   function openSelectMenuHandler() {
//     const { x, y } = getCaretCoordinates();
//     this.setState({
//       selectMenuIsOpen: true,
//       selectMenuPosition: { x, y }
//     });
//     document.addEventListener("click", this.closeSelectMenuHandler);
//   }

//   function closeSelectMenuHandler() {
//     this.setState({
//       htmlBackup: null,
//       selectMenuIsOpen: false,
//       selectMenuPosition: { x: null, y: null }
//     });
//     document.removeEventListener("click", this.closeSelectMenuHandler);
//   }

//   // Restore the clean html (without the command), focus the editable
//   // with the caret being set to the end, close the select menu
//   function tagSelectionHandler(tag) {
//     this.setState({ tag: tag, html: this.state.htmlBackup }, () => {
//       setCaretToEnd(this.contentEditable.current);
//       this.closeSelectMenuHandler();
//     });
//   }
//   return (
//     <>
//       {state.selectMenuIsOpen && (
//         <SelectMenu
//           position={selectMenuPosition}
//           onSelect={tagSelectionHandler}
//           close={closeSelectMenuHandler}
//         />
//       )}

//       {state.tag === "olli" && typeof bullets === "object" ? (
//         <ol>
//           {console.log(bullets)}
//           {}
//           {bullets.map((item, index) => (
//             <ContentEditable
//               className="block"
//               innerRef={contentEditable}
//               html={item}
//               tagName={"li"}
//               onChange={onChangeHandler}
//               onKeyDown={onKeyDownHandler}
//               onKeyUp={onKeyUpHandler}
//             />
//           ))}
//         </ol>
//       ) : (
//         <ContentEditable
//           className="block"
//           innerRef={contentEditable}
//           html={state.html}
//           tagName={state.tag}
//           onChange={onChangeHandler}
//           onKeyDown={onKeyDownHandler}
//           onKeyUp={onKeyUpHandler}
//         />
//       )}
//     </>
//   );
// };

// export default EditableBlock;
