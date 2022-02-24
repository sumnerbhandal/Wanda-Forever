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

export default function ReviewHeader(props) {
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
        <Button
          variant="text"
          type="button"
          label="Back to Editor Mode"
          onClick={() => {
            props.setHistoryView(false);
          }}
        />
      </div>
      <div className="right">
        <Button variant="secondary" type="button" label={UploadContract} />
        <div className="user-icon">SB</div>
      </div>
    </header>
  );
}
