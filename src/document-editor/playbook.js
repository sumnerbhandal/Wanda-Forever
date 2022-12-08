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

function SimpleAccordion(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [matchesContent, setMatchesContent] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    const panelName = document.getElementById(`${panel}header`);
    const closestP = panelName.childNodes[0].childNodes[1].innerHTML;
    const closestP2 = closestP.toLowerCase().replace(/ /g, "_");
    const spanID = document.getElementById(`${closestP2}_span`);

    if (spanID != null) {
      var headerOffset = 180;
      var elementPosition = spanID.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;
      const articleContainer = document.getElementById("article-container");
      props.setActiveHover(true);
      articleContainer.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
      });
    } else {
      props.setActiveHover(false);
      props.setShowProvision(false);
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
          <AccordionDetails className={props.goResponsive ? "two-column" : ""}>
            {listItem.tag === "ul" ? (
              <div className="recommendation">
                <p className="title">Recommendation</p>
                <ul>
                  {listItem.recommendation.length > 1 ? (
                    listItem.recommendation.map((Recommendation, index) => (
                      <li key={index}>{Recommendation}</li>
                    ))
                  ) : (
                    <li>{listItem.recommendation}</li>
                  )}
                </ul>
              </div>
            ) : (
              <div
                className="recommendation button"
                onClick={() => {
                  props.setSuggestedEdit(props.suggestedEditAfter);
                  setMatchesContent(true);
                }}
              >
                <p className="title">Recommendation</p>
                <button className="live-suggestion">
                  {!matchesContent ? (
                    <>
                      {listItem.recommendation.regular}
                      <span className="redline">
                        {listItem.recommendation.redline}
                      </span>
                    </>
                  ) : (
                    "Text matches suggestion"
                  )}
                </button>
              </div>
            )}

            <div className="issue">
              <p className="title">Issue</p>
              <p>{listItem.issue}</p>
            </div>
            {/* {typeof listItem.advisory === "undefined" ? null : (
              <div className="advisory">
                <div className={`advisory-circle ${listItem.advisory}`} />
                <p className="title">{listItem.advisory} Advisory</p>
              </div>
            )} */}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

const PlaybookContent = (props) => {
  return (
    <div className="playbook-container">
      <div className="search-and-title">
        <div className="playbook-settings">
          <h2>Playbook 1</h2>
          <div className="button-container">
            <Button variant="tertiary" label={RunAutoEdit} />
          </div>
        </div>
        <input placeholder="Search" />
      </div>
      <SimpleAccordion
        goResponsive={props.goResponsive}
        setActiveHover={props.setActiveHover}
        suggestedEditAfter={props.suggestedEditAfter}
        setSuggestedEdit={props.setSuggestedEdit}
        setShowProvision={props.setShowProvision}
      />
    </div>
  );
};

export default PlaybookContent;
