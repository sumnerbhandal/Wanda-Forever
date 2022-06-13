import * as React from "react";
import "./styles.scss";
import Button from "../_input/button/button";
import Robin from "./_assets/Robin-Logo-Bird.svg";
import File from "./_assets/File.svg";
import Workflow from "./_assets/Workflow.svg";
import PlatformButton from "./platformButton";
import { Link } from "react-router-dom/index";
import { useNavigate } from "react-router-dom/index";
import Dialog from "@mui/material/Dialog";

const RequestContract = (
  <>
    Contract Hub <img src={File} />
  </>
);
const NewWorkflow = (
  <>
    Create New Workflow <img src={Workflow} />
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
      {props.modalContent}
    </Dialog>
  );
}

export default function WorkflowHeader(props) {
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
        <p>{props.hubType} Workflows</p>
      </div>
      <div className="right">
        <Button variant="secondary" type="submit" label={RequestContract} />
        <Button
          variant="primary"
          // disabled
          type="submit"
          label={eval(props.primaryCTA)}
          onClick={handleClickOpen}
        />
        <div className="user-icon" onClick={() => logOut()}>
          SB
        </div>
      </div>
      <SimpleDialog
        modalContent={props.modalContent}
        open={open}
        onClose={handleClose}
      />
    </header>
  );
}
