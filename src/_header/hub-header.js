import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";

const SeeAllGroups = (
  <>
    See All Groups{" "}
    <span aria-hidden="true" class="material-icons">
      folder
    </span>
  </>
);
const UploadContract = (
  <>
    Upload Contract{" "}
    <span aria-hidden="true" className="material-icons">
      file_upload
    </span>
  </>
);

export default function HubHeader() {
  return (
    <header>
      Wanda Contract Hub
      <div className="right">
        <Button variant="secondary" type="submit" label={SeeAllGroups} />
        <Button variant="primary" type="submit" label={UploadContract} />
      </div>
    </header>
  );
}
