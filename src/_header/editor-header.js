import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import PlaybookClose from "./_assets/Playbook-Close.svg";
import PlaybookOpen from "./_assets/Playbook-Open.svg";
import Download from "./_assets/Download.svg";
import CPU from "./_assets/CPU.svg";
import Toggle from "../_input/toggle/toggle";

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
const RunAutoEdit = (
  <>
    Run Auto Edit <img src={CPU} />
  </>
);

export default function EditorHeader(props) {
  const [lastEdited, setLastEdited] = React.useState("");

  function getDate() {
    let today = new Date();
    let strDate = "Y/m/d"
      .replace("Y", today.getFullYear())
      .replace("m", today.getMonth() + 1)
      .replace("d", today.getDate());
    setLastEdited(strDate);
  }
  React.useEffect(() => getDate());
  return (
    <header>
      <div className="left">
        <a href="/contracts">
          <img src={Robin} />
        </a>
        <p>{props.documentName}</p>
        <p className="last-edited">{lastEdited}</p>
      </div>
      <div className="right">
        <Toggle
          label="Show Clean Version"
          id="clean-switch"
          labelClass="clean-version-switch-container"
          onClick={props.toggleCleanView}
        />

        {/* <Button
          variant="secondary"
          type="submit"
          label={props.drawerState ? ClosePlaybook : OpenPlaybook}
          onClick={props.toggleDrawer}
        /> */}
        <Button
          variant="secondary"
          type="submit"
          label={RunAutoEdit}
          // onClick={props.toggleDrawer}
        />
        <Button variant="primary" type="submit" label={UploadContract} />
        <div className="user-icon">SB</div>
      </div>
    </header>
  );
}
