import React, { useCallback, createRef, useState } from "react";
import { useNavigate } from "react-router-dom/index";
import Dropzone, { useDropzone } from "react-dropzone";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import UploadDark from "./_assets/Upload-Dark.svg";
import PlatformButton from "./platformButton";
import { Link } from "react-router-dom/index";
import GiantUpload from "./_assets/giant-upload-icon.svg";
import "./dropzone.scss";
// import ToolTip from "../../_notification/tooltip/tooltip";

const UploadContractDark = (
  <>
    Upload Contract <img src={UploadDark} />
  </>
);

export default function QueryHubHeader(props) {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);
  const dropzoneRef = createRef();
  const openDialog = () => {
    console.log(dropzoneRef.current);
    // Note that the ref is set async,
    // so it might be null at some point
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  const detectDrag = () => {
    setFocus(true);
  };

  const detectDragLeave = () => {
    setFocus(false);
  };

  const detectDragDrop = () => {
    setFocus(false);
    props.setUploadPresent(false);
    navigate("/query/upload");
  };

  function InnerDropzone(props) {
    const { getRootProps } = useDropzone({ noDragEventsBubbling: true });
    return (
      <div {...getRootProps}>
        <Button
          variant="secondary"
          type="button"
          label={UploadContractDark}
          onClick={openDialog}
          //this bubbles up so is not working, need to add inner dropzone no drag events
        />
      </div>
    );
  }

  return (
    <Dropzone
      ref={dropzoneRef}
      noClick
      noKeyboard
      onDragOver={detectDrag}
      onDragLeave={detectDragLeave}
      onDrop={detectDragDrop}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => {
        props.setUploadedFiles(acceptedFiles);
        return (
          <div
            className={
              focus ? "dropzone-container active" : "dropzone-container"
            }
          >
            {focus ? (
              <img className="giant-upload-icon" src={GiantUpload} />
            ) : null}
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              {console.log(acceptedFiles)}
              <header>
                <div className="left">
                  <Link to={{ pathname: props.homepage }}>
                    <img alt="logo" src={Robin} />
                  </Link>
                  <PlatformButton platform={props.platform} />
                  <p>{props.hubType}</p>
                </div>
                <div className="right">
                  <Button
                    variant="secondary"
                    type="button"
                    label={UploadContractDark}
                    onClick={openDialog}
                    //this bubbles up so is not working, need to add inner dropzone no drag events
                  />
                  {/* <ToolTip
                    className="footer"
                    message="When downloaded this will appear as a footer on each page"
                  /> */}
                  {/* <InnerDropzone /> */}
                  <div className="user-icon">{props.user}</div>
                </div>
              </header>
            </div>
          </div>
        );
      }}
    </Dropzone>
  );
}
