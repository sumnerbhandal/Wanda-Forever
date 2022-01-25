// import Settings from "./_assets/Settings.svg";
import Button from "../_input/button/button";
import DropDown from "../_input/dropDown/dropDown";
import FieldInput from "../_input/textInput/textInput";
import Toggle from "../_input/toggle/toggle";
import React, { useEffect, useState } from "react";

function Config(props) {
  useEffect(() => {
    document.getElementById("config-3").valueAsDate = new Date();
  }, []);
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
      <Toggle
        label="Would you like to use a header?"
        onClick={props.setShowHeader}
      />
      <div
        className={props.showHeader ? "header-fields" : "header-fields hidden"}
      >
        <FieldInput
          label="What is the company name?*"
          id="config-0"
          value={props.configFields[0].html}
          onChange={updateState}
          onClick={highlightField}
          onBlur={deactivateHighlight}
        />
        <FieldInput
          label="What is the company address?*"
          id="config-1"
          value={props.configFields[1].html}
          onChange={updateState}
          onClick={highlightField}
          onBlur={deactivateHighlight}
        />
        <FieldInput
          label="What is the company phone number?*"
          id="config-2"
          value={props.configFields[2].html}
          onChange={updateState}
          onClick={highlightField}
          onBlur={deactivateHighlight}
        />
      </div>

      <hr />
      <FieldInput
        label="When would you like the contract to start?*"
        type="date"
        id="config-3"
        value={props.configFields[3].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />

      <DropDown
        label="What’s the name of the company*"
        id="config-4"
        value={props.configFields[4].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
        option={["[Company Name]", "Example Company Name"]}
      />
      <FieldInput
        label="What’s the employee’s full name?*"
        id="config-5"
        value={props.configFields[5].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <FieldInput
        label="What’s is the employee's address?*"
        id="config-6"
        value={props.configFields[6].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <DropDown
        label="Where are the laws governed?*"
        id="config-7"
        value={props.configFields[7].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
        option={["[Place]", "United Kingdom", "USA"]}
      />
    </>
  );
}

const ContractConfig = (props) => {
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
      />
    </div>
  );
};

export default ContractConfig;
