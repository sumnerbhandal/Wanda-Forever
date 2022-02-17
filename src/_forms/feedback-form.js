import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./styles.scss";
import Input from "../_input/text/input";
import TextArea from "../_input/text/textArea";
import Button from "../_input/button/button";
import useToggle from "../utils/useToggle";
import Message from "./_assets/message.svg";
import Close from "./_assets/close.svg";

const submitFeedback = (
  <>
    Submit Feedback {"   "}
    <span style={{ marginLeft: "0.5rem" }} class="material-icons">
      send
    </span>
  </>
);

export const FeedbackForm = () => {
  const form = useRef();
  const [popupOpen, setPopUpOpen] = useToggle();
  const pageUrl = window.location.href;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_masn8rs",
        "template_f34mwzw",
        form.current,
        "user_Wd3WXRB2JdQ6Dvixkn5AH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closePopUp = (e) => {
    e.preventDefault();
    setPopUpOpen(false);
  };

  return (
    <div className={`feedback-form-container ${popupOpen ? "" : "collapsed"}`}>
      <form ref={form} onSubmit={sendEmail}>
        <div className="popup-header" onClick={closePopUp}>
          <h3>{popupOpen ? "Feedback Form" : "Leave Feedback"}</h3>
          <img
            alt="decorative"
            className="message"
            src={popupOpen ? Close : Message}
          />
        </div>
        <Input
          id="feedback-name"
          label="Name"
          type="text"
          name="name"
          placeholder="Robin"
          orientation="vertical"
        />
        <div style={{ display: "none" }} className="hidden">
          <Input
            label="pageUrl"
            type="text"
            name="pageUrl"
            value={pageUrl}
            placeholder=""
            orientation="vertical"
          />
        </div>

        <Input
          id="feedback-email"
          label="Email Address"
          type="email"
          name="user_name"
          placeholder="example@email.co.uk"
          orientation="vertical"
        />
        <TextArea
          id="feedback-message"
          label="Feedback"
          type="email"
          name="feedback"
          placeholder=""
          orientation="vertical"
          rows="5"
        />
        <Button variant="primary" type="submit" label={submitFeedback} />
      </form>
    </div>
  );
};

export default FeedbackForm;
