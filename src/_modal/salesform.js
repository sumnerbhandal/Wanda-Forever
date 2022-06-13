import React, { useEffect, useRef, useState } from "react";
import Input from "../_input/text/input";
import TextArea from "../_input/text/textArea";
import Button from "../_input/button/button";
import DropDown from "../_input/dropDown/dropDown";
import emailjs from "@emailjs/browser";
import useToggle from "../utils/useToggle";
import "./styles.scss";
import Close from "../_forms/_assets/close.svg";

const sendRequest = (
  <>
    Send Request {"   "}
    <span style={{ marginLeft: "0.5rem" }} className="material-icons">
      send
    </span>
  </>
);

const SalesForm = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contractSelected, setContractSelected] = useState(false);

  const selectContract = (e) => {
    setContractSelected(true);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_masn8rs",
        "template_51i8kvm",
        form.current,
        "user_Wd3WXRB2JdQ6Dvixkn5AH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="modal-container">
      <div className="modal-header">
        {formSubmitted ? (
          <h2>Your Form Has Been Submitted</h2>
        ) : (
          <h2>Request Contract Draft</h2>
        )}
        <img src={Close} />
      </div>
      <div className="modal-content-body">
        <form ref={form} onSubmit={sendEmail}>
          {formSubmitted ? (
            <>
              <div className="submission-success">
                <img src="https://raw.githubusercontent.com/sumnerbhandal/font-repo/5468d70719cccb7c93e170a59a5ccee55e7728ef/Welcome.svg" />
              </div>
            </>
          ) : (
            <>
              <DropDown
                label="Contract Type*"
                id="sales-contract-type"
                value="Latest"
                orientation="vertical"
                option={[
                  "Please Select",
                  "Amendment",
                  "Consulting Agreement Company",
                  "Consulting Agreement Individual",
                  "Distribution Agreement",
                  "End User License Agreement",
                  "License Agreement",
                  "Material Transfer Agreement One-Way Academic",
                  "Material Transfer Agreement One-Way Company",
                  "Material Transfer Agreement One-Way Prototype",
                  "Material Transfer Agreement Mutual",
                  "NDA One-Way",
                  "NDA Two-Way",
                  "NDA Three-Way",
                  "Non-Recurring Engineering Agreement",
                  "Procurement Agreement",
                  "Quality Agreement Repligen Supply",
                  "Quality Agreement Procurement",
                  "Real Estate Agreement",
                  "Recruiting Agency Agreement",
                  "Rental Agreement",
                  "Research Agreement",
                  "Service Agreement",
                  "Strategic Agreement",
                  "Supply Agreement",
                  "Other"
                ]}
                name="contract_type"
                onChange={selectContract}
              />
              {contractSelected ? (
                <div className="nda-selected">
                  <hr />
                  <Input
                    label="Counterparty Entity Details*"
                    id="sales-counterparty-entity"
                    placeholder="Details"
                    orientation="vertical"
                    name="counterparty_entity_details"
                  />
                  <DropDown
                    label="Client Entity*"
                    id="sales-client-entity"
                    value="Latest"
                    orientation="vertical"
                    option={["Please Select", "Client Entity Example"]}
                    name="client_entity"
                  />
                  <TextArea
                    label="Transaction Details*"
                    id="sales-transaction-details"
                    placeholder="Transaction details"
                    orientation="vertical"
                    rows="4"
                    name="transaction_details"
                  />
                </div>
              ) : null}
              <div className="button-container">
                <Button
                  id="sales=request-discard"
                  label="Discard Request"
                  variant="secondary"
                />
                <Button
                  id="sales-request-form"
                  label={sendRequest}
                  variant="primary"
                  type="submit"
                />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SalesForm;
