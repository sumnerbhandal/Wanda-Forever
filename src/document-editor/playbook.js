import Settings from "./_assets/Settings.svg";
import Button from "../_input/button/button";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";

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

  // const [tabShown, setTabShown] = useState();

  const showTab = (e) => {
    const tabId = e.target.id;
    let idOnly = tabId.replace("option", "");
    console.log(idOnly);
    const tabContent = document.getElementsByClassName("tab-content");

    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabContent[idOnly].style.display = "flex";
  };

  React.useEffect(() => {
    const tabContent = document.getElementsByClassName("tab-content");
    console.log(tabContent);
    tabContent[2].style.display = "flex";
  }, []);

  const [checked, setChecked] = React.useState(false);

  const handleExpand = () => {
    setChecked((prev) => !prev);
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
            ) : listItem.tag === "button" ? (
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
            ) : (
              <ul className="tabs" role="tablist">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    width: "100%",
                    height: "2.5rem",
                    borderBottom: "1px solid var(--robin-blue)",
                    gap: "0.125rem"
                  }}
                >
                  {listItem.recommendation.map((Recommendation, index) => (
                    // <li key={index}>{Recommendation}</li>
                    <>
                      <li>
                        <input
                          type="radio"
                          name="tabs"
                          id={`tab${index}`}
                          checked
                        />
                        <label
                          for={`tab${index}`}
                          role="tab"
                          aria-selected="true"
                          aria-controls={`panel${index}`}
                          tabindex="0"
                          onClick={showTab}
                          id={`option${index}`}
                        >
                          {Recommendation.tab}
                        </label>
                      </li>
                    </>
                  ))}
                </div>
                <div style={{ display: "flex", width: "100%" }}>
                  {listItem.recommendation.map((Recommendation, index) => (
                    // <li key={index}>{Recommendation}</li>
                    <>
                      <div
                        id={`tab-content${index}`}
                        className="recommendation button tab-content"
                        role="tabpanel"
                        aria-labelledby="description"
                        aria-hidden="false"
                        style={{}}
                      >
                        <p className="title">Recommended Edit</p>
                        <button className="live-suggestion">
                          {!matchesContent ? (
                            <>
                              {Recommendation.regular}
                              <span className="redline">
                                {Recommendation.redline}
                              </span>
                            </>
                          ) : (
                            "Text matches suggestion"
                          )}
                        </button>
                      </div>
                    </>
                  ))}
                </div>
              </ul>
            )}

            <div className="issue">
              <p className="title">Issue</p>
              <Collapse in={checked} collapsedSize={108}>
                <p>{listItem.issue}</p>
              </Collapse>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  checked={checked}
                  onClick={handleExpand}
                  variant="text"
                  label={!checked ? "Read More" : "Read Less"}
                />
              </div>
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
