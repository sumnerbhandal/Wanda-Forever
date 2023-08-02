import { lte } from "lodash";
import { useEffect, useState, useReducer } from "react";
import EmploymentContract from "../query-editor/_contract-types/employment-query";
import "./styles.scss";
import ML from "./_assets/ml.svg";
import Text from "./_assets/text.svg";
import data from "./_query-api/query.json";

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map((item) => [item[key], item])).values()];
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

export default function QueryResults(props) {
  // const [labelMatch, setLabelViewFilter] = useState();
  const [labelMatch, setLabelMatch] = useState([]);
  const [textMatch, setTextMatch] = useState([]);
  const [textMatchResults, setTextMatchResults] = useState([]);
  const [labelViewFilter, setLabelViewFilter] = useState([]);
  const [contractPreview, setContractPreview] = useState();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (props.activeTags.length > 0) {
      for (let h = 0; h < props.activeTags.length; h++) {
        let tagInstance = props.activeTags[h];

        for (let i = 0; i < data.contracts.length; i++) {
          const Labels = data.contracts[i].labels;
          const ContractText = data.contracts[i].text;

          if (Labels !== "") {
            let labelCheck = Labels.filter(
              (record) => record.name === tagInstance
            );

            if (labelCheck.length > 0) {
              let match = data.contracts[i];
              const updatedMatches = labelMatch;
              updatedMatches.push(match);
              setLabelMatch(getUniqueListBy(updatedMatches, "id"));

              const labelView = labelViewFilter;
              labelView.push(tagInstance);
              setLabelViewFilter(removeDuplicates(labelView));
            }
          }

          //loop through contract to see if this text exists

          if (ContractText.toLowerCase().includes(tagInstance.toLowerCase())) {
            const contractWithText = data.contracts[i];
            const existingTextMatches = textMatch;
            existingTextMatches.push(tagInstance);

            setTextMatch(removeDuplicates(existingTextMatches));

            //contract where this text matches
            const textMatchResultsExisting = textMatchResults;
            // get the existing array
            textMatchResultsExisting.push(contractWithText);
            //push these results to them

            //
            setTextMatchResults(
              getUniqueListBy(textMatchResultsExisting, "id")
            );
          }
        }
      }
    } else {
      setLabelMatch([]);
      setLabelViewFilter([]);
      setContractPreview(null);
    }
  }, [props.activeTags]);

  const selectContract = (labelResult) => {
    setActive(labelResult.id);
    if (labelResult.contract === "EmploymentContract") {
      setContractPreview(<EmploymentContract />);
    }
  };

  const selectContractText = (textResult) => {
    setActive(textResult.id + "text");
    if (textResult.contract === "EmploymentContract") {
      setContractPreview(<EmploymentContract />);
    }
  };

  useEffect(() => {
    // const results = document.getElementById("Results-Container");

    setTimeout(() => {
      const secondChild = document.getElementsByClassName(
        "live-result-container"
      )[0];
      // console.log(secondChild);
      secondChild.click();
    }, "0");
  }, [props.activeTags]);

  return (
    <>
      <div className="results" id="Results-Container">
        {
          labelMatch.length > 0 ? (
            <>
              {/* <h2>{labelMatch.length} Result(s)</h2> */}
              <div className="top-results">
                <h3>
                  {props.activeTags.length < 2
                    ? `${labelMatch.length} contract${
                        labelMatch.length > 0 ? "s" : ""
                      } 
                  containing "${props.activeTags}"`
                    : `${props.activeTags.length} results`}
                </h3>
              </div>

              {labelMatch.map((labelResult, index) => (
                <div
                  key={index}
                  id={labelResult.id}
                  dataContract={labelResult.contract}
                  className={`live-result-container ${
                    active === labelResult.id ? "active" : ""
                  }`}
                  onClick={() => selectContract(labelResult)}
                >
                  <div className="contract-icon-container">
                    <div className="contract-icon">
                      <p className="letter">{labelResult.name.slice(0, 1)}</p>
                    </div>
                  </div>
                  <div className="contract-details">
                    <div className="contract-name">
                      <p>
                        <strong>{labelResult.name}</strong>
                      </p>
                    </div>
                    <hr />
                    {/* <h3>{labelResult.type}</h3> */}

                    {labelResult.labels.map((labels, index) =>
                      labelViewFilter.includes(labels.name) ? (
                        <div key={index} className="label-instance">
                          <img src={ML} className="icon" />
                          <p>{labels.name}</p>
                          <p>{labels.value}</p>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : null
          // <p>Sorry no results for {props.activeTags}</p>
        }
        {
          textMatchResults.length > 0 ? (
            <>
              {/* <h2>{textMatchResults.length} Result(s)</h2> */}
              <div className="top-results">
                <h3>
                  {textMatchResults.length} contract
                  {textMatchResults.length > 0 ? "s" : ""} containing{" "}
                  {props.activeTags.length < 2
                    ? `"${props.activeTags}"`
                    : "your searches"}
                </h3>
              </div>
              {textMatchResults.map((textResult, index) => (
                <div
                  key={index}
                  id={textResult.id + "text"}
                  className={`live-result-container ${
                    active === textResult.id + "text" ? "active" : ""
                  }`}
                  onClick={() => selectContractText(textResult)}
                >
                  <div className="contract-icon-container">
                    <div className="contract-icon">
                      <p className="letter">{textResult.name.slice(0, 1)}</p>
                    </div>
                  </div>
                  <div className="contract-details">
                    <div className="contract-name">
                      <p>
                        <strong>{textResult.name}</strong>
                      </p>
                    </div>
                    {/* <h3>{labelResult.type}</h3> */}

                    {textMatch.map((textStored, index) => (
                      <div key={index} className="label-instance">
                        <img src={Text} alt="text" className="icon" />
                        <p>Text</p>
                        <p>{textStored}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : null
          // <p>Sorry no results for {props.activeTags}</p>
        }
      </div>
      <div className="contract-view">{contractPreview}</div>
    </>
  );
}
