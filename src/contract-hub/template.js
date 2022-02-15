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
            <p>Employment</p>
          </div>
          <div className="card">
            <div
              onClick={() =>
                navigate("./editor/supplier-contract-example_supplier")
              }
              className="thumbnail"
            >
              Commercial NDA
              <hr />
            </div>
            <p>Commercial NDA</p>
          </div>
          <div className="card">
            <div
              onClick={() =>
                navigate("./editor/commercial-contract-example_commercial")
              }
              className="thumbnail"
            >
              Supplier Agreement
              <hr />
            </div>
            <p>Supplier Agreement</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default TemplateSelect;
