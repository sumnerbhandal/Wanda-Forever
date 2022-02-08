import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import Download from "./_assets/Download.svg";
import Toggle from "../_input/toggle/toggle";
import PlatformButton from "./platformButton";

const UploadContract = (
  <>
    Download as .docx <img src={Download} />
  </>
);

export default function DraftingHeader(props) {
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
          <img alt="Robin Logo" src={Robin} />
        </a>
        <PlatformButton />
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
        <Button variant="primary" type="submit" label={UploadContract} />
        <div className="user-icon">SB</div>
      </div>
    </header>
  );
}
