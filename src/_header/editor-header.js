import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import Download from "./_assets/Download.svg";
import CPU from "./_assets/CPU.svg";
import Saved from "./_assets/Saved.svg";
import Toggle from "../_input/toggle/toggle";
import PlatformButton from "./platformButton";
import { Link } from "react-router-dom/index";

const UploadContract = (
  <>
    Download as <img alt="Download Icon" src={Download} />
  </>
);
const RunAutoEdit = (
  <>
    Run Auto Edit <img alt="Machine Learning Icon" src={CPU} />
  </>
);

const SavedIcon = (
  <>
    <img alt="Save Status" src={Saved} />
  </>
);

export default function EditorHeader(props) {
  const [lastEdited, setLastEdited] = React.useState("");

  function getDate() {
    let today = new Date();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let strDate = "Y/m/d"
      .replace("Y", today.getFullYear())
      .replace("m", today.getMonth() + 1)
      .replace("d", today.getDate())
      .replace("2022", "22");
    setLastEdited("Last Edited " + strDate);
    // setLastEdited("Saving...");
  }
  React.useEffect(() => getDate());
  return (
    <header>
      <div className="left">
        <Link to={{ pathname: "/review" }}>
          <img alt="logo" src={Robin} />
        </Link>
        <PlatformButton platform="Review Contracts" />
        <p contentEditable="true" className="truncated">
          {props.documentName}
        </p>
        <p className="last-edited">{lastEdited}</p>
        {/* {SavedIcon} */}
        <Button variant="text" type="button" label="See History" />
      </div>
      <div className="right">
        <Toggle
          label="Clean Version"
          id="clean-switch"
          labelClass="clean-version-switch-container"
          onClick={props.toggleCleanView}
        />
        <Button variant="primary" type="button" label={RunAutoEdit} />
        <Button variant="secondary" type="button" label={UploadContract} />
        <div className="user-icon">SB</div>
      </div>
    </header>
  );
}
