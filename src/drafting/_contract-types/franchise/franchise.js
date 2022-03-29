import React from "react";

const Span = (props) => {
  const focusOnField = (e) => {
    const target = e.target;
    const targetField = target
      .getAttribute("data-id")
      .replace("text", "config");
    const targetFieldDom = document.getElementById(targetField);

    targetFieldDom.closest(".error-container").classList.add("focused");
    targetFieldDom.focus();
    targetFieldDom.scrollTo();
  };
  return (
    <span
      data-id={`text-${props.id}`}
      className={
        props.configFields[props.id].active
          ? "placeholder focused"
          : "placeholder"
      }
      onClick={focusOnField}
    >
      {props.configFields[props.id].html}
    </span>
  );
};

const FranchiseContract = (props) => {
  return (
    <article id="contract" className="contract">
      <h1>INTERNATIONAL FRANCHISE AGREEMENT</h1>

      <p className="full-width">
        <strong>
          THIS IS SCHEDULE A REFERRED TO IN THE INTERNATIONAL FRANCHISE
          AGREEMENT BETWEEN FRANCHISOR AND FRANCHISEE DATED{" "}
          <Span id="0" configFields={props.configFields} />
        </strong>
      </p>

      <div className="table">
        <div className="row">
          <div className="cell half">
            <strong>Franchisor:</strong>
            (Full name)
          </div>
          <div className="cell half">
            Hogwarts Limited
            <br />
            (Company No. 10404756)
          </div>
        </div>
        <div className="row">
          <div className="cell half">
            <strong>Franchisor Address:</strong>
          </div>
          <div className="cell half">
            Hogwarts Castle
            <br />
            1 Highlands
            <br />
            Scotland, United Kingdom
          </div>
        </div>
        <div className="row">
          <div className="cell half">
            <strong>Franchisee:</strong>
            (Full Name)
          </div>
          <div className="cell half">
            <Span id="1" configFields={props.configFields} />
          </div>
        </div>
        <div className="row">
          <div className="cell half">
            <strong>Franchisee Address:</strong>
          </div>
          <div className="cell half">
            <Span id="2" configFields={props.configFields} />
          </div>
        </div>
        <div className="row">
          <div className="cell half">
            <strong>Advertising Contribution:</strong>
            (Clause 6)
          </div>
          <div className="cell half">
            <Span id="3" configFields={props.configFields} />% of Revenues
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Bank:</strong>
            (Clause 11.1)
          </div>
          <div className="cell half">
            Gringotts Wizarding Bank or such other institution that Franchisor
            specifies in writing to Franchisee from time-to-time.
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Continuing Fee:</strong>
          </div>
          <div className="cell half">
            <Span id="4" configFields={props.configFields} />% of Revenues
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Currency:</strong>
            (Clause 11.1)
          </div>
          <div className="cell half">
            U.S. Dollars (based upon the exchange rate in effect upon the Due
            Date)
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Digital Fee:</strong>
            (Clause 5.7)
          </div>
          <div className="cell half">
            Will not exceed $0.60 (sixty cents) and will not increase by more
            than $0.05 (five cents) per digital transaction per year.
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Due Date:</strong>
          </div>
          <div className="cell half">10 days after each Accounting Period</div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Email Address for Notice:</strong>
            (Clause 22.2)
          </div>
          <div className="cell half">
            <Span id="5" configFields={props.configFields} />
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Extension Fee:</strong>
          </div>
          <div className="cell half">
            US $<Span id="6" configFields={props.configFields} />
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Governing Law Territory:</strong>
            (Clause 24.7)
          </div>
          <div className="cell half">
            <Span id="7" configFields={props.configFields} />
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Guarantors:</strong>
          </div>
          <div className="cell half">
            <Span id="8" configFields={props.configFields} />
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Initial Fee:</strong>
            (Clause 2.1)
          </div>
          <div className="cell half">
            US $<Span id="9" configFields={props.configFields} />
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Interest Rate:</strong>
            (Clause 11.2)
          </div>
          <div className="cell half">18% or highest lawful rate</div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Outlet Address:</strong>
          </div>
          <div className="cell half">
            <Span id="10" configFields={props.configFields} />
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Post-Term Restraint Area:</strong>
            (Clause 13.2)
          </div>
          <div className="cell half">
            The United Kingdom and Republic of Ireland
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Post-Term Restraint Period:</strong>
            (Clause 13.2)
          </div>
          <div className="cell half">12 months</div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Postal Receipt Date:</strong>
            (Clause 22)
          </div>
          <div className="cell half">3 days after the date of posting</div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Renewal Fee:</strong>
            (Clause 18(h))
          </div>
          <div className="cell half">
            US $<Span id="11" configFields={props.configFields} /> (CPI adjusted
            for each year of the term)
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Renewal Term:</strong>
            (Clause 18)
          </div>
          <div className="cell half">10 years</div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Technology Fee:</strong>
            (Clause 5.6)
          </div>
          <div className="cell half">
            Will not exceed $400 (four hundred dollars per Accounting Period,
            excluding VAT and will not increase by more than 5% per Outlet per
            year.
          </div>
        </div>

        <div className="row">
          <div className="cell half">
            <strong>Term:</strong>
            (Clause 1.1)
          </div>
          <div className="cell half">
            10 years commencing on the Date of Grant
          </div>
        </div>

        <div className="row">
          <div className="cell two-thirds">
            <div className="signature">
              <p style={{ flexWrap: "wrap" }}>
                <strong>SIGNED FOR AND ON BEHALF OF FRANCHISOR</strong>
                <hr style={{ marginTop: "3rem" }} />
              </p>
            </div>
          </div>
          <div className="cell third">
            <div className="signature">
              <p style={{ flexWrap: "wrap" }}>
                <strong>Date</strong>
                <hr style={{ marginTop: "3rem" }} />
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="cell two-thirds">
            <div className="signature">
              <p style={{ flexWrap: "wrap" }}>
                <strong>SIGNED FOR AND ON BEHALF OF FRANCHISEE</strong>
                <hr style={{ marginTop: "3rem" }} />
              </p>
            </div>
          </div>
          <div className="cell third">
            <div className="signature">
              <p style={{ flexWrap: "wrap" }}>
                <strong>Date</strong>
                <hr style={{ marginTop: "3rem" }} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" />
    </article>
  );
};

export default FranchiseContract;
