import Input from "../../../_input/text/input";
import TextArea from "../../../_input/text/textArea";
import DropDown from "../../../_input/dropDown/dropDown";
import Toggle from "../../../_input/toggle/toggle";
import React, { useEffect } from "react";

const governingLaws = [
  "[PLEASE SELECT]",
  "English",
  "Welsh",
  "French",
  "American",
  "Swiss"
];

function Config(props) {
  // useEffect(() => {
  //   document.getElementById("config-1").valueAsDate = new Date();
  //   document.getElementById("config-2").valueAsDate = new Date();
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
    const scrollId = id.replace("config-", "text-");
    const scrollIdRef = "[data-id=" + scrollId + "]";

    const correspondingSpan = document.querySelectorAll(scrollIdRef)[0];
    correspondingSpan.scrollIntoView({ behavior: "instant", block: "center" });
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
        label="When is the contract due to start?*"
        id="config-0"
        type="date"
        value={props.configFields[0].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the name of the Franchisee?*"
        id="config-1"
        value={props.configFields[1].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <TextArea
        rows="2"
        label="What is the Franchisee's address*"
        id="config-2"
        value={props.configFields[2].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What percentage of the revenue is for advertising contributions?*"
        id="config-3"
        value={props.configFields[3].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What percentage of the revenue is for continuing fees?*"
        id="config-4"
        value={props.configFields[4].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the email address for Notice?*"
        id="config-5"
        value={props.configFields[5].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the extension fee?*"
        id="config-6"
        value={props.configFields[6].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <DropDown
        id="config-7"
        label="What is the governing law territory?*"
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
        option={governingLaws}
      />
      <Input
        label="Who are the guarantors?*"
        id="config-8"
        value={props.configFields[8].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the initial fee?*"
        id="config-9"
        value={props.configFields[9].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <TextArea
        rows="2"
        label="What is the address of the outlet*"
        id="config-10"
        value={props.configFields[10].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the renewal fee?*"
        id="config-11"
        value={props.configFields[11].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
    </>
  );
}

const FranchiseContractConfig = (props) => {
  return (
    <div className="playbook-container">
      <div className="playbook-settings">
        <h2>Configure Contract</h2>
      </div>
      <hr />
      <Config
        configFields={props.configFields}
        setConfigFields={props.setConfigFields}
        showHeader={props.showHeader}
        setShowHeader={props.setShowHeader}
        supplierAlternateNames={props.supplierAlternateNames}
        setSupplierAlternateNames={props.setSupplierAlternateNames}
      />
    </div>
  );
};

export default FranchiseContractConfig;
