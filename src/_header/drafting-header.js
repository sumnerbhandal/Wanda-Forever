import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import DownloadWhite from "./_assets/Download-White.svg";
import Toggle from "../_input/toggle/toggle";
import PlatformButton from "./platformButton";
import { Link } from "react-router-dom/index";

const DownloadContract = (
  <>
    Download as .docx <img alt="download icon" src={DownloadWhite} />
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
        <Link to={{ pathname: "/draft" }}>
          <img alt="logo" src={Robin} />
        </Link>
        {/* <PlatformButton platform="Draft Contracts" /> */}
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
        <Button variant="primary" type="submit" label={DownloadContract} />
        <div className="user-icon">{props.user}</div>
      </div>
    </header>
  );
}
