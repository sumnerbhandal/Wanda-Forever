import Settings from "./_assets/Settings.svg";
import VersionController from "./_version-controller/version-controller";
import Button from "../_input/button/button";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Playbook from "./_playbook/robin";

const RunAutoEdit = (
  <>
    Configure <img src={Settings} />
  </>
);

const HistoryDemo = (props) => {
  return (
    <div className="playbook-container">
      <div className="playbook-settings">
        <h2>Document History</h2>
        <div className="button-container"></div>
      </div>
      <VersionController
        user="Sumner Bhandal"
        version="Latest"
        date="26/01/21"
        time="12:20"
        action="made an edit"
      />
      <VersionController
        user="Sumner Bhandal"
        version="Version 1"
        date="26/01/21"
        time="12:20"
        action="made an edit"
      />
      <VersionController
        user="Sumner Bhandal"
        version="Original Version"
        date="26/01/21"
        time="12:20"
        action="uploaded via manual upload"
      />
    </div>
  );
};

export default HistoryDemo;
