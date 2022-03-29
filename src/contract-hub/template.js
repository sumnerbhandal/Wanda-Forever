import React, { useState } from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom/index";

const TemplateSelect = (props) => {
  const navigate = useNavigate();
  return (
    <aside className="templates-container">
      <div className="most-popular">
        <p className="heading">Your Most Popular Templates</p>
        <div className="card-container">
          <div className="card">
            <div
              onClick={() =>
                navigate("./editor/employment-contract-example_employment")
              }
              className="thumbnail"
            >
              Employment Contract
              <hr />
            </div>
            {/* <p>Employment Contract</p> */}
          </div>
          <div className="card">
            <div
              onClick={() =>
                navigate("./editor/international-franchise-agreement_franchise")
              }
              className="thumbnail"
            >
              International Franchise Agreement
              <hr />
            </div>
            {/* <p>International Franchise Agreement</p> */}
          </div>
          <div className="card">
            <div
              onClick={() =>
                navigate("./editor/commercial-contract-example_commercial")
              }
              className="thumbnail"
            >
              Commercial Contract Example
              <hr />
            </div>
            {/* <p>Commercial Contract Example</p> */}
          </div>
          <div className="card">
            <div
              onClick={() =>
                navigate("./editor/service-contract-example_supplier")
              }
              className="thumbnail"
            >
              Supplier Agreement
              <hr />
            </div>
            {/* <p>Supplier Agreement</p> */}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TemplateSelect;
