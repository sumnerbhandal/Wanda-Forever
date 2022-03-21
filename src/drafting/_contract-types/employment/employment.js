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

const EmploymentContract = (props) => {
  return (
    <article id="contract" className="contract">
      <div className="title-page employment">
        <p>
          <strong>ROBIN AI LIMITED</strong>
        </p>

        <p>AND</p>
        <br />
        <p>
          <strong>
            <Span id="0" configFields={props.configFields} />
          </strong>
        </p>
        <hr />
        <p>EMPLOYMENT AGREEMENT</p>
      </div>

      <p className="full-width">
        <strong>CONTRACT SUMMARY</strong>
      </p>

      <div className="table">
        <div className="row">
          <div className="cell third">
            <strong>Agreement Date:</strong>
          </div>
          <div className="cell two-thirds">
            This agreement is dated{" "}
            <Span id="1" configFields={props.configFields} />
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Commencement Date:</strong>
          </div>
          <div className="cell two-thirds">
            This agreement commences on{" "}
            <Span id="2" configFields={props.configFields} />
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Employer:</strong>
          </div>
          <div className="cell two-thirds">
            Robin AI Limited (formerly Geek Mate Limited) a company registered
            in England and Wales under registration number 11400135 whose
            registered office is at 1 Poultry, London, EC2R 8EJ (hereinafter
            referred to as “<strong>we</strong>”, “<strong>us</strong>” or the “
            <strong>Company</strong>”)
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Candidate:</strong>
          </div>
          <div className="cell two-thirds">
            <Span id="0" configFields={props.configFields} /> of{" "}
            <Span id="3" configFields={props.configFields} /> (hereinafter
            referred to as “<strong>you</strong>”)
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Candidate Contact:</strong>
          </div>
          <div className="cell two-thirds">
            Email: <Span id="4" configFields={props.configFields} />
            <br />
            Contact number: <Span id="5" configFields={props.configFields} />
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Position:</strong>
          </div>
          <div className="cell two-thirds">
            Your job title will be{" "}
            <Span id="6" configFields={props.configFields} />
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Salary:</strong>
          </div>
          <div className="cell two-thirds">
            Your annual salary is{" "}
            <Span id="7" configFields={props.configFields} />, which will be
            payable in arrears on the 1st of each month
          </div>
        </div>

        <div className="row">
          <div className="cell third">
            <strong>Share Options:</strong>
          </div>
          <div className="cell two-thirds">
            You will receive share options of{" "}
            <Span id="8" configFields={props.configFields} /> Your share options
            will be <Span id="9" configFields={props.configFields} /> of the
            Company at the date of this Employment Agreement
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Probationary Period:</strong>
          </div>
          <div className="cell two-thirds">
            You will have a probationary period of{" "}
            <Span id="10" configFields={props.configFields} />, with a
            discretionary three-month extension
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Line Manager:</strong>
          </div>
          <div className="cell two-thirds">
            Your line manager will be{" "}
            <Span id="11" configFields={props.configFields} />
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Notice Period:</strong>
          </div>
          <div className="cell two-thirds">
            Your notice period will be{" "}
            <Span id="12" configFields={props.configFields} />, with a
            discretionary three-month extension
          </div>
        </div>
        {props.showConditionalText ? (
          <div className="row">
            <div className="cell third">
              <strong>Post-Termination Restrictions:</strong>
            </div>
            <div className="cell two-thirds">
              Clause 17 shall apply to this agreement
            </div>
          </div>
        ) : null}
        <div className="row">
          <div className="cell third">
            <strong>
              Amendments to the Standard Terms and Conditions of Employment:
            </strong>
          </div>
          <div className="cell two-thirds">
            <Span id="13" configFields={props.configFields} />
          </div>
        </div>
        <div className="row">
          <div className="cell half">
            <div className="flex-100">
              <p>Executed by:</p>
            </div>
            <div className="flex-100">
              <strong>ROBIN AI LIMITED</strong>
            </div>
            <strong></strong>
            <div className="signature">
              <p>
                Signed:
                <hr />
              </p>
              <p>Date:</p>
              <p>Name:</p>
            </div>
          </div>
          <div className="cell half">
            <div className="flex-100">
              <p>
                <strong>&nbsp;</strong>
              </p>
            </div>
            <div className="flex-100">
              <strong>
                <Span id="0" configFields={props.configFields} />
              </strong>
            </div>

            <div className="signature">
              <p>
                Signed:
                <hr />
              </p>
              <p>Date:</p>
              <p>Name:</p>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" />
    </article>
  );
};

export default EmploymentContract;
