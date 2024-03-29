import Input from "../../../_input/text/input";
import TextArea from "../../../_input/text/textArea";
import Toggle from "../../../_input/toggle/toggle";
import React, { useEffect } from "react";

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
        label="Contract start date*"
        id="config-0"
        type="date"
        value={props.configFields[0].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="Counterparty*"
        id="config-1"
        value={props.configFields[1].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="Counterparty's registration number*"
        id="config-2"
        value={props.configFields[2].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <TextArea
        rows="2"
        label="Counterparty's address*"
        id="config-3"
        value={props.configFields[3].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="Client*"
        id="config-4"
        value={props.configFields[4].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="Client's registration number*"
        id="config-5"
        value={props.configFields[5].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <TextArea
        rows="2"
        label="Client's address*"
        id="config-6"
        value={props.configFields[6].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="Project name/reference*"
        id="config-7"
        value={props.configFields[7].html}
        onChange={updateState}
        onClick={highlightField}
        onFocus={highlightField}
        onBlur={deactivateHighlight}
      />
    </>
  );
}

const EmploymentContractConfig = (props) => {
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

export default EmploymentContractConfig;
