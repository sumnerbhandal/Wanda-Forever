import DropDown from "../../../_input/dropDown/dropDown";
import Input from "../../../_input/text/input";
import TextArea from "../../../_input/text/textArea";
import Toggle from "../../../_input/toggle/toggle";
import React, { useEffect } from "react";

function Config(props) {
  // useEffect(() => {
  //   document.getElementById("config-3").valueAsDate = new Date();
  // }, []);
  function updateState(e) {
    const id = e.target.id;
    const newValue = e.target.value;
    const index = id.replace("config-", "");
    let updatedList = props.configFields.map((field) => {
      if (field.id === index) {
        return { ...field, html: newValue, active: true }; //gets everything that was already in item, and updates "done"
      }
      return field; // else return unmodified item
    });
    props.setConfigFields(updatedList);
  }
  function highlightField(e) {
    const id = e.target.id;
    const newValue = e.target.value;
    const index = id.replace("config-", "");
    let updatedList = props.configFields.map((field) => {
      if (field.id === index) {
        return { ...field, html: newValue, active: true }; //gets everything that was already in item, and updates "done"
      }
      return field; // else return unmodified item
    });
    props.setConfigFields(updatedList);
    const scrollId = id.replace("config-", "data-");

    const correspondingSpan = document.querySelectorAll(
      "[data-id=`${scrollId}`]"
    );
    console.log(correspondingSpan);
    correspondingSpan.scrollTo();
  }
  function deactivateHighlight(e) {
    const id = e.target.id;
    const newValue = e.target.value;
    const index = id.replace("config-", "");
    let updatedList = props.configFields.map((field) => {
      if (field.id === index) {
        return { ...field, html: newValue, active: false }; //gets everything that was already in item, and updates "done"
      }
      return field; // else return unmodified item
    });
    props.setConfigFields(updatedList);
  }

  return (
    <>
      <Input
        label="What is the candidate’s full name?*"
        id="config-0"
        value={props.configFields[0].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the date of the contract?*"
        type="date"
        id="config-1"
        value={props.configFields[1].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />

      <Input
        label="What is the candidate’s start date?*"
        type="date"
        id="config-2"
        value={props.configFields[2].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />

      <Input
        label="What is the candidate’s address?*"
        id="config-3"
        value={props.configFields[3].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the candidate’s email address?*"
        id="config-4"
        value={props.configFields[4].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the candidate’s phone number?*"
        id="config-5"
        value={props.configFields[5].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the candidate’s job title?*"
        id="config-6"
        value={props.configFields[6].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the candidate’s annual salary? (include £ in answer)*"
        id="config-7"
        value={props.configFields[7].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="How many share options will the candidate receive?*"
        // labelExplainer="(expressed as “You will receive X share options”)"
        id="config-8"
        value={props.configFields[8].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What are the candidate’s share options at the date of the agreement?*"
        // labelExplainer="(expressed as “Your share options will be X% of the Company at the date of this Employment Agreement”). Please include “%” below."
        id="config-9"
        value={props.configFields[9].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="How long (months) will the probation period last?*"
        labelExplainer="(add “months” after answer)"
        id="config-10"
        value={props.configFields[10].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="Who will be the candidate’s line manager?*"
        id="config-11"
        value={props.configFields[11].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="How long (months) will the notice period last? (add “months” after answer)"
        id="config-12"
        value={props.configFields[12].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <hr />
      <Toggle
        label="Should the Post-Termination restrictions in clause 17 apply?*"
        onClick={props.setShowConditionalText}
      />
      <hr />
      <TextArea
        rows="5"
        label="Are there any amendments to the Standard Terms and Conditions of Employment?"
        labelExplainer="If no, please insert “Not applicable”. If yes, please detail below."
        id="config-13"
        value={props.configFields[13].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
    </>
  );
}

const EmploymentContractConfig = (props) => {
  return (
    <div className="playbook-container">
      <div className="playbook-settings">
        <h2>Configure Employment Contract</h2>
      </div>
      <hr />
      <Config
        configFields={props.configFields}
        setConfigFields={props.setConfigFields}
        showHeader={props.showHeader}
        setShowHeader={props.setShowHeader}
        showConditionalText={props.showConditionalText}
        setShowConditionalText={props.setShowConditionalText}
      />
    </div>
  );
};

export default EmploymentContractConfig;
