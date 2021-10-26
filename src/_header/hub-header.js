import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import Folder from "./_assets/Folder.svg";
import Upload from "./_assets/Upload.svg";

const SeeAllGroups = (
  <>
    See All Groups <img src={Folder} />
  </>
);
const UploadContract = (
  <>
    Upload Contract <img src={Upload} />
  </>
);

export default function HubHeader() {
  return (
    <header>
      <div className="left">
        <a href="/contracts">
          <img src={Robin} />
        </a>
        <p>Wanda Contract Hub</p>
      </div>
      <div className="right">
        <Button variant="secondary" type="submit" label={SeeAllGroups} />
        <Button variant="primary" type="submit" label={UploadContract} />
        <div className="user-icon">SB</div>
      </div>
    </header>
  );
}
