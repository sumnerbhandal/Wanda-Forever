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
        label="What is the service agreement for?*"
        id="config-0"
        value={props.configFields[0].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="Who is the service provider*"
        id="config-1"
        value={props.configFields[1].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <hr />
      <Toggle
        label="Does the service provider go by another name?"
        onClick={props.setSupplierAlternateNames}
      />
      <div
        className={
          props.supplierAlternateNames
            ? "header-fields"
            : "header-fields hidden"
        }
      >
        <Input
          label="What other names does the service provider go by?*"
          id="config-3"
          value={props.configFields[2].html}
          onChange={updateState}
          onClick={highlightField}
          onBlur={deactivateHighlight}
        />
      </div>
      <hr />
      <Input
        label="What is the name of the client?*"
        id="config-3"
        value={props.configFields[3].html}
        onChange={updateState}
        onClick={highlightField}
        onBlur={deactivateHighlight}
      />
      <Input
        label="What is the registered name of the service provider*"
        id="config-4"
        value={props.configFields[4].html}
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
        <h2>Configure Supplier Agreement</h2>
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
