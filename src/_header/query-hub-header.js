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
import DropDown from "../_input/dropDown/dropDown";
import ToolTip from "../_notification/tooltip/tooltip";

const UploadContractDark = (
  <>
    Upload Executed Contract <img src={UploadDark} />
  </>
);

export default function QueryHubHeader(props) {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(false);
  const [tooltip, setToolip] = useState(false);
  const dropzoneRef = createRef();
  const openDialog = () => {
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

  const changeUserType = (e) => {
    const type = e.target.options[e.target.selectedIndex].value;
    console.log(type);
    props.setUserType(type);
  };

  const showTooltip = () => {
    setToolip(true);
  };

  const hideTooltip = () => {
    setToolip(false);
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
    <>
      <Dropzone
        ref={dropzoneRef}
        noClick
        noKeyboard
        onDragOver={detectDrag}
        onDragLeave={detectDragLeave}
        onDrop={detectDragDrop}
        disabled={props.userType === "Read Only" ? true : false}
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
              </div>
            </div>
          );
        }}
      </Dropzone>
      <header>
        <div className="left">
          <Link to={{ pathname: props.homepage }}>
            <img alt="logo" src={Robin} />
          </Link>
          <PlatformButton platform={props.platform} />
          <p>{props.hubType}</p>
        </div>
        <div className="right">
          <div className="user-switcher">
            <DropDown
              id="Select Type"
              name="Select Contract Type"
              label="User Type"
              option={["Owner", "Admin", "User", "Read Only"]}
              onChange={changeUserType}
            />
          </div>
          {props.userType === "Read Only" ? null : (
            <div className="upload-button-container">
              <Button
                variant="secondary"
                type="button"
                label={UploadContractDark}
                onClick={openDialog}
                onMouseOver={showTooltip}
                onMouseLeave={hideTooltip}
                //this bubbles up so is not working, need to add inner dropzone no drag events
              />
              {tooltip ? (
                <ToolTip
                  className="contract-prompt"
                  message="Only .pdf and .docx files are supported."
                />
              ) : null}
            </div>
          )}
          <div className="user-icon">{props.user}</div>
        </div>
      </header>
    </>
  );
}
