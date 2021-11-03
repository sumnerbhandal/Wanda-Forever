import CPU from "./_assets/CPU.svg";
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
    Run Auto Edit <img src={CPU} />
  </>
);

const PlaybookSettings = (
  <>
    <img src={Settings} />
  </>
);

function SimpleAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    const panelName = document.getElementById(`${panel}header`);
    const closestP = panelName.childNodes[0].childNodes[1].innerHTML;
    const closestP2 = closestP.toLowerCase().replace(/ /g, "_");
    const spanID = document.getElementById(closestP2 + "_span");

    if (spanID != null && expanded === false) {
      var headerOffset = 120;
      var elementPosition = spanID.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;
      const articleContainer = document.getElementById("article-container");
      spanID.style.backgroundColor = "#CCD3E4";
      articleContainer.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      const spanConfidential = document.getElementById(
        "confidential_information_span"
      );
      spanConfidential.style.backgroundColor = "inherit";
    }
  };

  return (
    <div className="playbook-accordions">
      {Playbook.map((listItem, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          id={listItem.provision.toLowerCase().replace(/ /g, "_")}
        >
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
              {listItem.tag === "ul" ? (
                <ul>
                  {listItem.recommendation.length > 1 ? (
                    listItem.recommendation.map((Recommendation, index) => (
                      <li key={index}>{Recommendation}</li>
                    ))
                  ) : (
                    <li>{listItem.recommendation}</li>
                  )}
                </ul>
              ) : (
                <button className="live-suggestion">
                  {listItem.recommendation.regular}
                  <span className="redline">
                    {listItem.recommendation.redline}
                  </span>
                </button>
              )}
            </div>
            <div className="issue">
              <p className="title">Issue</p>
              <p>{listItem.issue}</p>
            </div>
            {typeof listItem.advisory === "undefined" ? null : (
              <div className="advisory">
                <div className={`advisory-circle ${listItem.advisory}`} />
                <p className="title">{listItem.advisory} Advisory</p>
              </div>
            )}
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
