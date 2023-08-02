import React, { useCallback, createRef, useState } from "react";
import Dropzone from "react-dropzone";
import "./styles.scss";

function Upload() {
  const dropzoneRef = createRef();
  const [focus, setFocus] = useState(false);
  const openDialog = () => {
    // Note that the ref is set async,
    // so it might be null at some point
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  const detectDrag = () => {
    console.log("dragged");
    setFocus(true);
  };

  const detectDragLeave = () => {
    console.log("drag leave");
    setFocus(false);
  };
  return (
    <Dropzone
      ref={dropzoneRef}
      noClick
      noKeyboard
      onDragOver={detectDrag}
      onDragLeave={detectDragLeave}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => {
        return (
          <div className={focus ? "container active" : "container"}>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here</p>
              <button type="button" onClick={openDialog}>
                Open File Dialog
              </button>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>
                {acceptedFiles.map((file) => (
                  <li key={file.path}>
                    {file.path} - {file.size} bytes
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        );
      }}
    </Dropzone>
  );
}

export default Upload;
