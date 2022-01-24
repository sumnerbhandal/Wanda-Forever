import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import Download from "./_assets/Download.svg";

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
          <img src={Robin} />
        </a>
        <p>{props.documentName}</p>
        <p className="last-edited">{lastEdited}</p>
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
        <Button variant="primary" type="submit" label={UploadContract} />
        <div className="user-icon">SB</div>
      </div>
    </header>
  );
}
