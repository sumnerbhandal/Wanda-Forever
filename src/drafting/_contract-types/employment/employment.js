import React from "react";

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
          <span
            className={
              props.configFields[0].active
                ? "placeholder focused"
                : "placeholder"
            }
          >
            {props.configFields[0].html}
          </span>
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
            <span
              className={
                props.configFields[1].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[1].html}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Commencement Date:</strong>
          </div>
          <div className="cell two-thirds">
            This agreement commences on
            <span
              className={
                props.configFields[2].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {" "}
              {props.configFields[2].html}
            </span>
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
            <span
              className={
                props.configFields[0].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[0].html}
            </span>{" "}
            of{" "}
            <span
              className={
                props.configFields[3].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[3].html}
            </span>{" "}
            (hereinafter referred to as “<strong>you</strong>”)
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Candidate Contact:</strong>
          </div>
          <div className="cell two-thirds">
            Email:{" "}
            <span
              className={
                props.configFields[4].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[4].html}
            </span>
            <br />
            Contract number:{" "}
            <span
              className={
                props.configFields[5].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[5].html}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Position:</strong>
          </div>
          <div className="cell two-thirds">
            Your job title will be{" "}
            <span
              className={
                props.configFields[6].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[6].html}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Salary:</strong>
          </div>
          <div className="cell two-thirds">
            Your annual salary is{" "}
            <span
              className={
                props.configFields[7].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[7].html}
            </span>
            , which will be payable in arrears on the 1st of each month
          </div>
        </div>

        <div className="row">
          <div className="cell third">
            <strong>Salary:</strong>
          </div>
          <div className="cell two-thirds">
            You will receive share options of{" "}
            <span
              className={
                props.configFields[8].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[8].html}
            </span>{" "}
            Your share options will be{" "}
            <span
              className={
                props.configFields[9].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[9].html}
            </span>{" "}
            of the Company at the date of this Employment Agreement
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Probationary Period:</strong>
          </div>
          <div className="cell two-thirds">
            You will have a probationary period of{" "}
            <span
              className={
                props.configFields[10].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[10].html}
            </span>
            , with a discretionary three-month extension
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Line Manager:</strong>
          </div>
          <div className="cell two-thirds">
            Your line manager will be{" "}
            <span
              className={
                props.configFields[11].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[11].html}
            </span>
            , with a discretionary three-month extension
          </div>
        </div>
        <div className="row">
          <div className="cell third">
            <strong>Notice Period:</strong>
          </div>
          <div className="cell two-thirds">
            Your notice period will be{" "}
            <span
              className={
                props.configFields[11].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[11].html}
            </span>
            , with a discretionary three-month extension
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
            <span
              className={
                props.configFields[12].active
                  ? "placeholder focused"
                  : "placeholder"
              }
            >
              {props.configFields[12].html}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EmploymentContract;
