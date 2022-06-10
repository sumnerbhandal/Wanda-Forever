import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import Folder from "./_assets/Folder.svg";
import Upload from "./_assets/Upload.svg";
import File from "./_assets/File.svg";
import Workflow from "./_assets/Workflow.svg";
import PlatformButton from "./platformButton";
import Templates from "./_assets/Templates.svg";
import { Link } from "react-router-dom/index";
import { useNavigate } from "react-router-dom/index";
import Dialog from "@mui/material/Dialog";

const SeeAllGroups = (
  <>
    See All Groups <img src={Folder} />
  </>
);
const RequestContract = (
  <>
    Request Contract <img src={File} />
  </>
);
const Workflows = (
  <>
    Workflows <img src={Workflow} />
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

interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  // onClose: void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      {props.content}
    </Dialog>
  );
}

export default function HubHeader(props) {
  const history = useNavigate();
  function logOut() {
    localStorage.setItem("authenticated", false);
    history("/");
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };
  return (
    <header>
      <div className="left">
        <Link to={{ pathname: props.homepage }}>
          <img alt="logo" src={Robin} />
        </Link>
        {/* <PlatformButton platform={props.platform} /> */}
        <p>{props.hubType} Contract Hub</p>
      </div>
      <div className="right">
        <Button
          variant="tertiary"
          type="submit"
          label={RequestContract}
          onClick={handleClickOpen}
        />
        <Button variant="secondary" type="submit" label={Workflows} />
        <Button
          variant="primary"
          // disabled
          type="submit"
          label={eval(props.primaryCTA)}
        />
        <div className="user-icon" onClick={() => logOut()}>
          SB
        </div>
      </div>
      <SimpleDialog content={props.content} open={open} onClose={handleClose} />
    </header>
  );
}
