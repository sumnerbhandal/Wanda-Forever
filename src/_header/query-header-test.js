// import React, { useCallback, createRef, useState } from "react";
// import Dropzone, { useDropzone } from "react-dropzone";
// import "./styles.scss";
// import Button from "../_input/button/button";
// import Robin from "./_assets/Robin-Logo-Bird.svg";
// import UploadDark from "./_assets/Upload-Dark.svg";
// import PlatformButton from "./platformButton";
// import { Link } from "react-router-dom/index";
// import "./dropzone.scss";

// const UploadContractDark = (
//   <>
//     Upload Contract <img src={UploadDark} />
//   </>
// );

// export default function QueryHubHeader(props) {
//   return (
//     <header>
//       <div className="left">
//         <Link to={{ pathname: props.homepage }}>
//           <img alt="logo" src={Robin} />
//         </Link>
//         <PlatformButton platform={props.platform} />
//         <p>{props.hubType}</p>
//       </div>
//       <div className="right">
//         <Button variant="secondary" type="button" label={UploadContractDark} />
//         {/* <InnerDropzone /> */}
//         <div className="user-icon">{props.user}</div>
//       </div>
//     </header>
//   );
// }

import React, { useCallback, createRef, useState } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import UploadDark from "./_assets/Upload-Dark.svg";
import PlatformButton from "./platformButton";
import { Link } from "react-router-dom/index";
import "./dropzone.scss";

const UploadContractDark = (
  <>
    Upload Contract <img src={UploadDark} />
  </>
);

export default function QueryHubHeader(props) {
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
    console.log("dragged");
    setFocus(true);
  };

  const detectDragLeave = () => {
    console.log("drag leave");
    setFocus(false);
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

  const sendFiles = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  return (
    <Dropzone
      ref={dropzoneRef}
      // noClick
      noKeyboard
      onDragOver={detectDrag}
      onDragLeave={detectDragLeave}
      onDrop={detectDragLeave}
      onDropAccepted={sendFiles({ acceptedFiles })}
    >
      {({ getRootProps, getInputProps, acceptedFiles }) => {
        return (
          <div
            className={
              focus ? "dropzone-container active" : "dropzone-container"
            }
          >
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
