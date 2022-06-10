import React, { useEffect, useRef, useState } from "react";
import Input from "../_input/text/input";
import TextArea from "../_input/text/textArea";
import Button from "../_input/button/button";
import DropDown from "../_input/dropDown/dropDown";
import emailjs from "@emailjs/browser";
import useToggle from "../utils/useToggle";

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
    <>
      <div className="modal-header">
        <h2>Request Contract Draft</h2>
      </div>
      <div className="modal-content-body">
        <form ref={form} onSubmit={sendEmail}>
          {formSubmitted ? (
            <>
              <div style={{ marginTop: "1rem" }}>
                Thank you for your feedback!
              </div>
              <video loop autoPlay muted>
                <source
                  src="https://cdn.dribbble.com/users/472667/screenshots/15234142/media/cb0e236c6b047295fd672ef10acefba1.mp4"
                  type="video/mp4"
                />
              </video>
            </>
          ) : (
            <>
              <DropDown
                label="Contract Type*"
                id="sales-contract-type"
                value="Latest"
                orientation="vertical"
                option={["Version 1", "Original Version"]}
                name="contract_type"
              />
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
                option={["Please Select", "Original Version"]}
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
    </>
  );
};

export default SalesForm;