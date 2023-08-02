import React, { useState, useCallback, Component, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom/index";
import { DropzoneArea } from "material-ui-dropzone";
import "./styles.scss";

const Upload = (props) => {
  const [file, setFiles] = useState();

  const handleChange = (files) => {
    setFiles(files);
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <>
      <DropzoneArea onChange={handleChange} />
      {/* {console.log(file)} */}
    </>
  );
};

export default Upload;
