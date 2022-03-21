import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import Folder from "./_assets/Folder.svg";
import Upload from "./_assets/Upload.svg";
import PlatformButton from "./platformButton";
import Templates from "./_assets/Templates.svg";
import { Link } from "react-router-dom/index";
import { useNavigate } from "react-router-dom/index";

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
const BrowseTemplates = (
  <>
    Browse Templates <img src={Templates} />
  </>
);

export default function HubHeader(props) {
  const history = useNavigate();
  function logOut() {
    localStorage.setItem("authenticated", false);
    history("/");
  }
  return (
    <header>
      <div className="left">
        <Link to={{ pathname: props.homepage }}>
          <img alt="logo" src={Robin} />
        </Link>
        <PlatformButton platform={props.platform} />
        <p>{props.hubType} Contract Hub</p>
      </div>
      <div className="right">
        <Button
          variant="secondary"
          type="submit"
          disabled
          label={SeeAllGroups}
        />
        <Button
          variant="primary"
          disabled
          type="submit"
          label={eval(props.primaryCTA)}
        />
        <div className="user-icon" onClick={() => logOut()}>
          SB
        </div>
      </div>
    </header>
  );
}
