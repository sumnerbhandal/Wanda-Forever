import { lte } from "lodash";
import { useEffect, useState, useReducer } from "react";
import EmploymentContract from "../query-editor/_contract-types/employment-query";
import "./styles.scss";
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
  const [contractPreview, setContractPreview] = useState(
    <EmploymentContract />
  );
  const [active, setActive] = useState(1);

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
              // console.log(labelViewFilter);
            }
          }

          setTextMatch(props.activeTags);

          //loop through contract to see if this text exists

          if (ContractText.includes(tagInstance)) {
            const contractWithText = data.contracts[i];

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
    console.log(textMatchResults);
  }, [props.activeTags]);

  useEffect(() => {}, [props.activeTags]);

  return (
    <>
      <div className="results">
        {
          labelMatch.length > 0 ? (
            <>
              {/* <h2>{labelMatch.length} Result(s)</h2> */}
              <div className="top-results">
                <h3>
                  {labelMatch.length} contract{labelMatch.length > 0 ? "s" : ""}{" "}
                  containing{" "}
                  {props.activeTags.length < 2
                    ? `"${props.activeTags}"`
                    : "selected labels"}
                </h3>
              </div>

              {labelMatch.map((labelResult, index) => (
                <div
                  key={index}
                  id={labelResult.id}
                  className="live-result-container"
                  onClick={() => setActive(labelResult.id)}
                  style={{
                    background: active === labelResult.id ? "#F5F6F9" : "white"
                  }}
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
                    {/* <h3>{labelResult.type}</h3> */}

                    {labelResult.labels.map((labels, index) =>
                      labelViewFilter.includes(labels.name) ? (
                        <div key={index} className="label-instance">
                          <div className="icon"></div>
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
            </>
          ) : null
          // <p>Sorry no results for {props.activeTags}</p>
        }
      </div>
      <div className="contract-view">{/* {contractPreview} */}</div>
    </>
  );
}
