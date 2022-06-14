import React, { useEffect, useRef, useState } from "react";
import Input from "../_input/text/input";
import TextArea from "../_input/text/textArea";
import Toggle from "../_input/toggle/toggle";
import Button from "../_input/button/button";
import DropDown from "../_input/dropDown/dropDown";
import emailjs from "@emailjs/browser";
import useToggle from "../utils/useToggle";
import "./styles.scss";
import Close from "../_forms/_assets/close.svg";

const templates = [
  {
    title: "Draft First Mark Up",
    description:
      "A workflow to ensure that a first mark up is drafted correctly."
  },
  {
    title: "Example Second Workflow",
    description: "This is a description of what the template does."
  }
];

const submitFeedback = (
  <>
    Assign Workflow {"   "}
    <span style={{ marginLeft: "0.5rem" }} className="material-icons">
      send
    </span>
  </>
);

const SalesForm = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [workflowConfigure, setWorkflowConfigure] = useState(false);
  const [appovalExpanded, setApprovalExpanded] = useToggle();
  const [templateSelected, setTemplateSelected] = useState(false);

  const BackStep = (
    <span
      onClick={() => {
        setTemplateSelected(false);
      }}
    >
      <img src="https://raw.githubusercontent.com/sumnerbhandal/font-repo/d3fd88b7178b3988a58c83111a2fec7d31103d4f/fi_arrow-left-circle.svg" />{" "}
      Back
    </span>
  );

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_masn8rs",
        "template_stwcekx",
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
    <div className="modal-container template-library ">
      <div className="modal-header lined">
        {formSubmitted ? (
          <h2>Your Workflow Has Been Created</h2>
        ) : (
          <h2> {!templateSelected ? "Assign a New Workflow" : BackStep}</h2>
        )}
        <img src={Close} />
      </div>
      {templateSelected ? (
        <div className="modal-content-body template-library">
          <form className="feedback-form" ref={form} onSubmit={sendEmail}>
            {formSubmitted ? (
              <>
                <div className="submission-success">
                  <img src="https://raw.githubusercontent.com/sumnerbhandal/font-repo/5468d70719cccb7c93e170a59a5ccee55e7728ef/Welcome.svg" />
                </div>
              </>
            ) : (
              <div className="workflow-configure-view">
                <div className="template-preview">
                  <img src="https://via.placeholder.com/300x180/CCD3E4/CCD3E4.png" />
                  <div className="template-preview-details">
                    <h2>Draft First Mark Up</h2>
                    <p>
                      A workflow to ensure that a first mark up is drafted
                      correctly.
                    </p>
                  </div>
                  <DropDown
                    label="Contract Template*"
                    id="contract-template"
                    option={[
                      "Please Select",
                      "NDA Template 1",
                      "NDA Template 2",
                      "NDA Template 3"
                    ]}
                    orientation="vertical"
                    name="contract_template"
                  />
                </div>

                <div className="configure-workflow-settings">
                  <div className="configure-form-settings">
                    <h2>Configure Workflow</h2>
                    <Input
                      id="task-name"
                      label="Task Name*"
                      type="text"
                      name="task_name"
                      placeholder="Draft First Mark Up"
                    />
                    <Input
                      label="Due Date*"
                      name="due_date"
                      type="date"
                      id="due-date"
                    />
                    <DropDown
                      label="Assign To*"
                      id="assign-to"
                      option={[
                        "Please Select",
                        "Kyra Byrne",
                        "Sumner Bhandal",
                        "Jake Foster",
                        "Richard Robinson",
                        "James Clough"
                      ]}
                      name="assign_to"
                    />
                    <hr />
                    <Toggle
                      label="Requires approval"
                      onClick={setApprovalExpanded}
                    />
                    <div
                      className={
                        appovalExpanded
                          ? "approval-container expanded"
                          : "approval-container"
                      }
                    >
                      <DropDown
                        label="Assign To"
                        id="approval-assign-to"
                        option={[
                          "Please Select",
                          "Sumner Bhandal",
                          "Jake Foster",
                          "Richard Robinson",
                          "James Clough"
                        ]}
                        name="approval_assign_to"
                      />
                    </div>
                  </div>
                  <div className="assign-button-container">
                    <Button
                      variant="primary"
                      type="submit"
                      label={submitFeedback}
                    />
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div className="modal-content-body template-library">
          <div className="select-template">
            <div className="template-panel">
              <h3>Templates</h3>
              <p>All Templates</p>
              <p>Drafting</p>
            </div>
            <div className="template-previewer">
              {templates.map((listItem, index) => (
                <div
                  key={index}
                  className="template-preview"
                  onClick={() => {
                    setTemplateSelected(true);
                  }}
                >
                  <img src="https://via.placeholder.com/300x180/CCD3E4/CCD3E4.png" />
                  <div className="template-preview-details">
                    <h3>{listItem.title}</h3>
                    <p>{listItem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesForm;
