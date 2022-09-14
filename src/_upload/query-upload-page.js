import React, { useCallback, createRef, useState } from "react";
import Dropzone from "react-dropzone";
import "./styles.scss";

export default function QueryUploadPage(props) {
  let Files = props.uploadedFiles;
  return (
    <div>
      Uploads Page
      {Files !== undefined
        ? Files.map((file) => (
            <li key={file.path}>
              {file.path} - {file.size} bytes
            </li>
          ))
        : null}
    </div>
  );
}
