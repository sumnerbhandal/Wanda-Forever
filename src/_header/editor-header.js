import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import PlaybookClose from "./_assets/Playbook-Close.svg";
import PlaybookOpen from "./_assets/Playbook-Open.svg";
import Download from "./_assets/Download.svg";

const OpenPlaybook = (
  <>
    Open Playbook <img src={PlaybookOpen} />
  </>
);

const ClosePlaybook = (
  <>
    Close Playbook <img src={PlaybookClose} />
  </>
);

const UploadContract = (
  <>
    Download as .docx <img src={Download} />
  </>
);

export default function EditorHeader(props) {
  return (
    <header>
      <div className="left">
        <a href="/contracts">
          <img src={Robin} />
        </a>
        <p>{props.documentName}</p>
        <p className="last-edited">{props.lastEdited}</p>
      </div>
      <div className="right">
        <label for="clean-switch" className="clean-version-switch-container">
          Show Clean Version
          <div className="switch">
            <input
              id="clean-switch"
              type="checkbox"
              onClick={props.toggleCleanView}
            />
            <span className="slider round"></span>
          </div>
        </label>
        <Button
          variant="secondary"
          type="submit"
          label={props.drawerState ? ClosePlaybook : OpenPlaybook}
          onClick={props.toggleDrawer}
        />
        <Button variant="primary" type="submit" label={UploadContract} />
        <div className="user-icon">SB</div>
      </div>
    </header>
  );
}
