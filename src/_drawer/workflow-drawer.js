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
    dueDate: "2022/06/16",
    assignedToText: "Assigned To",
    assignedTo: "Kyra Byrne",
    linkedContract: "File Name",
    linkedContractUrl:
      "https://wanda-forever.netlify.app/draft/repligen/editor/nda-two-way_nda",
    firstDraft: true,
    firstDraftContent: [
      // "Select an appropriate template",
      "Use contract request form information to draft contract"
    ],
    internalReview: true,
    approver: "Jake Foster",
    approvalTitle: "[Interal Review] Draft First Mark Up",
    comments: "",
    reviewApproved: false,
    formID: "template_v50uzw8"
  }
];

export const workflowKB = [
  {
    title: "Draft First Mark Up",
    dueDate: "2022/06/16",
    assignedToText: "Assigned To",
    assignedTo: "Kyra Byrne",
    linkedContract: "File Name",
    linkedContractUrl:
      "https://wanda-forever.netlify.app/draft/repligen/editor/nda-two-way_ndatwo",
    firstDraft: true,
    firstDraftContent: [
      // "Select an appropriate template",
      "Use contract request form information to draft contract"
    ],
    internalReview: true,
    approver: "Jake Foster",
    approvalTitle: "[Interal Review] Draft First Mark Up",
    comments: "",
    reviewApproved: true,
    formID: "template_v50uzw8"
  }
];

export const workflowJF = [
  {
    title: "[Interal Review] Draft First Mark Up",
    dueDate: "2022/06/16",
    assignedToText: "Originally Assigned To",
    assignedTo: "Kyra Byrne",
    linkedContract: "File Name",
    linkedContractUrl:
      "https://wanda-forever.netlify.app/draft/workflow/jf/editor/nda-two-way_ndatwo",
    firstDraft: false,
    firstDraftContent: [
      // "Select an appropriate template",
      "Use contract request form information to draft contract"
    ],
    internalReview: false,
    approver: "Jake Foster",
    approvalTitle: "[Interal Review] Draft First Mark Up",
    comments: "",
    reviewApproved: false,
    formID: "template_e7m9p0q"
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

const ChangesRequired = (
  <>
    Changes Required{" "}
    <img
      style={{ marginLeft: "0.5rem" }}
      src="https://raw.githubusercontent.com/sumnerbhandal/font-repo/8a7ad2ffdae1d096f9e9cf5eb6d0dc3f00c1451b/fi-request-changes.svg"
    />
  </>
);

const ApproveReview = (
  <>
    Approve Review{" "}
    <img
      style={{ marginLeft: "0.5rem" }}
      src="https://raw.githubusercontent.com/sumnerbhandal/font-repo/8a7ad2ffdae1d096f9e9cf5eb6d0dc3f00c1451b/fi-approve.svg"
    />
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

    if (target.checked) {
      setFirstDraftCount(firstDraftCount + 1);
    } else {
      setFirstDraftCount(firstDraftCount - 1);
    }
  };

  const sendEmail = (e) => {
    const target = e.target;
    e.preventDefault();
    const targetID = target.id;
    console.log(targetID);

    emailjs
      .sendForm(
        "service_masn8rs",
        targetID,
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
                <a href={listItem.linkedContractUrl}>Open Contract</a>
              )}
            </div>
            <div className="linked-contract">{listItem.linkedContract}</div>
          </div>
          {listItem.firstDraft ? (
            <div className="task-item">
              <div className="task-item-name">
                <p className="pre-title">First Draft</p>
                {listItem.reviewApproved ? (
                  <div className="approved-status complete">1/1 Complete</div>
                ) : (
                  <div
                    className={`approved-status ${
                      firstDraftCount === 1 ? "complete" : ""
                    }`}
                  >
                    {firstDraftCount}/1 Complete
                  </div>
                )}
              </div>

              {listItem.reviewApproved ? (
                <div class="task-group">
                  {listItem.firstDraftContent.map((task, index) => (
                    <label className="checkbox-group" key={index}>
                      <input
                        checked
                        type="checkbox"
                        name="packersOff"
                        value={`firsDraft-${index}`}
                        onClick={firstDraftState}
                      />
                      <span className="strikethrough">{task}</span>
                    </label>
                  ))}
                </div>
              ) : (
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
              )}
            </div>
          ) : null}
          <div className="task-item">
            <div className="task-item-name">
              <p className="pre-title">Internal Review</p>
              {listItem.internalReview ? (
                <div
                  className={`approved-status ${
                    listItem.reviewApproved ? "complete" : ""
                  }`}
                >
                  {listItem.reviewApproved ? "Approved" : "Not Approved"}
                </div>
              ) : null}
            </div>
            {listItem.reviewApproved ? (
              <form className="feedback-form">
                <div className="comments-submitted">
                  <strong>Approved By {listItem.approver}</strong>
                </div>
              </form>
            ) : (
              <form
                id={listItem.formID}
                ref={form}
                onSubmit={sendEmail}
                className="feedback-form"
              >
                {feedbackFormSent ? (
                  <>
                    <div className="comments-submitted">
                      {listItem.internalReview ? (
                        <strong>
                          Approval requested from {listItem.approver}
                        </strong>
                      ) : null}
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
                      {listItem.internalReview ? (
                        <>
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
                        </>
                      ) : (
                        <>
                          <Input
                            type="text"
                            name="assigned_to"
                            value={listItem.assignedTo}
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
                        </>
                      )}
                    </div>
                    {listItem.internalReview ? (
                      <p>
                        Once you have completed your review, click the button
                        below to request an internal review from{" "}
                        <strong>{listItem.approver}</strong>.
                      </p>
                    ) : (
                      <>
                        <p>
                          Once you have completed your review, leave your
                          comments and then select to either{" "}
                          <strong>request changes</strong> or{" "}
                          <strong>approve review</strong>.
                        </p>
                      </>
                    )}

                    <TextArea
                      rows="5"
                      label="Comments"
                      id="internal-review-tips"
                      onChange={(e) => {
                        setFeedbackFormContent(e.target.value);
                      }}
                    />
                    <div className="internal-review-container">
                      {listItem.internalReview ? (
                        <Button
                          variant="secondary"
                          type="submit"
                          label={sendForReviewButton}
                        />
                      ) : (
                        <>
                          <Button variant="secondary" label={ChangesRequired} />
                          <Button
                            variant="secondary"
                            type="submit"
                            label={ApproveReview}
                          />{" "}
                        </>
                      )}
                    </div>
                  </>
                )}
              </form>
            )}
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
