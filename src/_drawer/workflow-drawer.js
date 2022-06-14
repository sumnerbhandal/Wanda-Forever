import React, { useState, useRef } from "react";
import TextArea from "../_input/text/textArea";
import Input from "../_input/text/input";
import Button from "../_input/button/button";
import emailjs from "@emailjs/browser";
import Close from "../_forms/_assets/close.svg";
import "./styles.scss";

export const workflowStageOne = [
  {
    title: "Draft First Mark Up",
    dueDate: "2022/06/14",
    assignedToText: "Assigned To",
    assignedTo: "Kyra Byrne",
    linkedContract: "File Name",
    firstDraft: true,
    firstDraftContent: [
      "Select an appropriate template",
      "Use contract request form information to draft contract"
    ],
    internalReview: true,
    approver: "Jake Foster",
    approvalTitle: "[Interal Review] Draft First Mark Up",
    comments: "",
    reviewApproved: false
  }
];

const sendForReviewButton = (
  <>
    Send for Internal Review{" "}
    <img src="https://raw.githubusercontent.com/sumnerbhandal/font-repo/05d326d0309d21a616e4fc8fd0295e7f3e37e4e1/fi-user.svg" />
  </>
);

const awaitingInternalReview = (
  <>
    Awaiting Internal Review{" "}
    <img src="https://raw.githubusercontent.com/sumnerbhandal/font-repo/05d326d0309d21a616e4fc8fd0295e7f3e37e4e1/fi-user.svg" />
  </>
);

export default function WorkflowDrawer(props) {
  const form = useRef();
  const [firstDraftCount, setFirstDraftCount] = useState(0);
  const [feedbackFormSent, setFeedbackFormSent] = useState(false);
  const [feedbackFormContent, setFeedbackFormContent] = useState("");

  function getFirstLetters(str) {
    const firstLetters = str
      .split(" ")
      .map((word) => word[0])
      .join("");

    return firstLetters;
  }

  const firstDraftState = (e) => {
    const target = e.target;
    console.log(target.checked);

    if (target.checked) {
      setFirstDraftCount(firstDraftCount + 1);
    } else {
      setFirstDraftCount(firstDraftCount - 1);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_masn8rs",
        "template_v50uzw8",
        form.current,
        "user_Wd3WXRB2JdQ6Dvixkn5AH"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFeedbackFormSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const feed =
    props.feed === "workflowStageOne"
      ? workflowStageOne
      : props.feed === "workflow-kb"
      ? workflowKB
      : props.feed === "workflow-jf"
      ? workflowJF
      : null;

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = (value: string) => {
    props.setOpen(false);
  };
  return feed.map((listItem, index) => (
    <>
      <aside
        key={index}
        className={`workflow-container ${props.open ? "open" : ""}`}
      >
        <div className="workflow-container-header">
          <h2>{listItem.title}</h2>
          <img
            src={Close}
            onClick={() => {
              props.setOpen(false);
            }}
          />
        </div>
        <div className="assigned-to">
          <div className="name-container">
            {listItem.assignedToText}:
            <div className="name-seed">
              {getFirstLetters(listItem.assignedTo)}
            </div>
            {listItem.assignedTo}
          </div>
        </div>
        <div className="tasks">
          <div className="task-item">
            <div className="task-item-name">
              <p className="pre-title">Linked Contract</p>
              {listItem.linkedContract === "" ? (
                <a disabled href="">
                  Open Contract
                </a>
              ) : (
                <a href="">Open Contract</a>
              )}
            </div>
            <div className="linked-contract">{listItem.linkedContract}</div>
          </div>
          {listItem.firstDraft ? (
            <div className="task-item">
              <div className="task-item-name">
                <p className="pre-title">First Draft</p>
                <div
                  className={`approved-status ${
                    firstDraftCount === 2 ? "complete" : ""
                  }`}
                >
                  {firstDraftCount}/2 Complete
                </div>
              </div>
              <div class="task-group">
                {listItem.firstDraftContent.map((task, index) => (
                  <label className="checkbox-group" key={index}>
                    <input
                      type="checkbox"
                      name="packersOff"
                      value={`firsDraft-${index}`}
                      onClick={firstDraftState}
                    />
                    <span className="strikethrough">{task}</span>
                  </label>
                ))}
              </div>
            </div>
          ) : null}
          <div className="task-item">
            <div className="task-item-name">
              <p className="pre-title">Internal Review</p>
              <div
                className={`approved-status ${
                  listItem.reviewApproved ? "complete" : ""
                }`}
              >
                {listItem.reviewApproved ? "Approved" : "Not Approved"}
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="feedback-form">
              {feedbackFormSent ? (
                <>
                  <div className="comments-submitted">
                    <strong>Approval requested from {listItem.approver}</strong>
                    <p>Comments:</p>
                    <p>{feedbackFormContent}</p>
                  </div>
                  <div className="internal-review-container">
                    <Button
                      variant="secondary"
                      type="submit"
                      label={awaitingInternalReview}
                      disabled
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="hidden-form-elements">
                    <Input
                      type="text"
                      name="approver"
                      value={listItem.approver}
                      orientation="vertical"
                    />
                    <Input
                      type="text"
                      name="title"
                      value={listItem.approvalTitle}
                      orientation="vertical"
                    />
                    <Input
                      type="text"
                      name="due_date"
                      value={listItem.dueDate}
                      orientation="vertical"
                    />
                    <Input
                      type="text"
                      name="original_assignee"
                      value={listItem.assignedTo}
                      orientation="vertical"
                    />
                  </div>
                  <p>
                    Once you have completed your review, click the button below
                    to request an internal review from{" "}
                    <strong>{listItem.approver}</strong>.
                  </p>
                  <TextArea
                    rows="5"
                    label="Comments"
                    id="internal-review-tips"
                    onChange={(e) => {
                      setFeedbackFormContent(e.target.value);
                    }}
                  />
                  <div className="internal-review-container">
                    <Button
                      variant="secondary"
                      type="submit"
                      label={sendForReviewButton}
                    />
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </aside>
      <div className="open-workflow-container">
        <Button
          variant="secondary"
          type="submit"
          label="Open Workflow"
          onClick={() => {
            props.setOpen(true);
          }}
        />
      </div>
    </>
  ));
}
