import Settings from "./_assets/Settings.svg";
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
      <p>comparisons go here </p>
    </div>
  );
};

export default HistoryDemo;
