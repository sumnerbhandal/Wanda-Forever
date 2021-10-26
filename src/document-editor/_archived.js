import React, { useState } from "react";
import EditablePage from "./utils/editable-page";
import GenericNda from "../_api/nda/nda.json";
import GenericNda2 from "../_api/nda/nda-2.json";
import DropDown from "../_input/dropDown/dropDown";
import Button from "../_input/button/button";

import Canvas from "../canvas/canvas";

import "./styles.scss";

const clientOptions = [
  "Client 1",
  "Client 2",
  "Client 3",
  "Client 4",
  "Client 5"
];
const playbookOptions = [
  "Playbook 1",
  "Playbook 2",
  "Playbook 3",
  "Playbook 4",
  "Playbook 5"
];

const ContractDetails = (props) => {
  return (
    <>
      <div className="section">
        <p>
          <strong>File Name</strong>
        </p>
        <p className="end-of-chunk">Long-NDA-Title-Name-Goes-Here</p>
        <p>
          <strong>Last edited</strong>
        </p>
        <p>13/07/21 14:29</p>
        <p className="end-of-chunk">
          <a href="#">See version history</a>
        </p>
        <p className="end-of-chunk">
          <a href="#">Download as .docx</a>
        </p>
      </div>
      <div className="section options">
        <DropDown
          id="contract-client"
          label="Client"
          name="contract-client"
          option={clientOptions}
        />
        <DropDown
          id="contract-client-playbook"
          label="Playbook"
          name="ontract-client-playbook"
          option={playbookOptions}
        />
        <Button variant="primary" type="submit" label="Run Boilerplate" />
      </div>
    </>
  );
};

const DocumentEditor = (props) => {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <Canvas
      username="Namey Name"
      page={<EditablePage contract={GenericNda.NDA} />}
      sidebar={<ContractDetails />}
    />
  );
};

export default DocumentEditor;
