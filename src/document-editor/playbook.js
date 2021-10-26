import CPU from "./_assets/CPU.svg";
import Settings from "./_assets/Settings.svg";
import Button from "../_input/button/button";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RunAutoEdit = (
  <>
    Run Auto Edit <img src={CPU} />
  </>
);

const PlaybookSettings = (
  <>
    <img src={Settings} />
  </>
);

const PlaybookData = [
  {
    count: 0,
    provision: "Provision Example",
    recommendation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    issue: "Short explainer as to what the reason is for the decision.",
    advisory: "Green"
  },
  {
    count: 1,
    provision: "Provision Example",
    recommendation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    issue: "Short explainer as to what the reason is for the decision.",
    advisory: "Red"
  },
  {
    count: 0,
    provision: "Provision Example",
    recommendation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    issue: "Short explainer as to what the reason is for the decision.",
    advisory: "Amber"
  },
  {
    count: 2,
    provision: "Provision Example",
    recommendation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    issue: "Short explainer as to what the reason is for the decision.",
    advisory: "Green"
  },
  {
    count: 0,
    provision: "Provision Example",
    recommendation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    issue: "Short explainer as to what the reason is for the decision.",
    advisory: "Red"
  },
  {
    count: 0,
    provision: "Provision Example",
    recommendation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    issue: "Short explainer as to what the reason is for the decision.",
    advisory: "Amber"
  }
];

function SimpleAccordion() {
  return (
    <div className="playbook-accordions">
      {PlaybookData.map((listItem, index) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}content`}
            id={`panel${index}header`}
          >
            <div className="count">{listItem.count}</div>
            <p className="accordion-label">{listItem.provision}</p>
          </AccordionSummary>
          <AccordionDetails>
            <div className="recommendation">
              <p className="title">Recommendation</p>
              <p>{listItem.recommendation}</p>
            </div>
            <div className="issue">
              <p className="title">Issue</p>
              <p>{listItem.issue}</p>
            </div>
            <div className="advisory">
              <div className={`advisory-circle ${listItem.advisory}`} />
              <p className="title">{listItem.advisory} Advisory</p>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

const PlaybookContent = (props) => {
  return (
    <div className="playbook-container">
      <div className="playbook-settings">
        <h2>Playbook 1</h2>
        <div className="button-container">
          <Button variant="tertiary" label={RunAutoEdit} />
          <Button variant="text" label={PlaybookSettings} />
        </div>
      </div>
      <input placeholder="Search" />
      <SimpleAccordion />
    </div>
  );
};

export default PlaybookContent;
