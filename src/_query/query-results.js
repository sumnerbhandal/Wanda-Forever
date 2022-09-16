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
  const [labelViewFilter, setLabelViewFilter] = useState([]);
  const [baseState, setBaseState] = useState(0);

  useEffect(() => {
    if (props.activeTags.length > 0) {
      for (let h = 0; h < props.activeTags.length; h++) {
        let tagInstance = props.activeTags[h];

        for (let i = 0; i < data.contracts.length; i++) {
          const Labels = data.contracts[i].labels;

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
        }
      }
    } else {
      setLabelMatch([]);
      setLabelViewFilter([]);
    }
  }, [props.activeTags]);

  return (
    <>
      {/* {console.log(labelViewFilter)}
    {console.log(labelMatch)}  */}
      <div className="results">
        {/* <h1>{props.activeTags.length} Label(s) Selected</h1> */}
        <h2>{labelMatch.length} Result(s)</h2>
        <div className="top-results">
          <h3>
            {labelMatch.length} contract(s) matching{" "}
            {props.activeTags.length < 2
              ? `"${props.activeTags}"`
              : "selected labels"}
          </h3>
          {/* <p>({props.activeTags})</p> */}
        </div>

        {/* {console.log(labelMatch)} */}
        {labelMatch !== undefined ? (
          labelMatch.map((labelResult, index) => (
            <div id={labelResult.id} className="live-result-container">
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
          ))
        ) : (
          <p>Sorry no results</p>
        )}
      </div>
      <div className="contract-view">
        <EmploymentContract />
      </div>
    </>
  );
}
