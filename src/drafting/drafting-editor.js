import React, { useState } from "react";
import DraftingHeader from "../_header/drafting-header";
import "./styles.scss";
import EmploymentContract from "./_contract-types/employment/employment";
import EmploymentContractConfig from "./_contract-types/employment/employment-config";
import CommercialContract from "./_contract-types/commercial/commercial";
import CommercialContractConfig from "./_contract-types/commercial/commercial-config";
import SupplierContract from "./_contract-types/supplier/supplier";
import SupplierContractConfig from "./_contract-types/supplier/supplier-config";
import useToggle from "../utils/useToggle";
import { useLocation } from "react-router-dom";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const DocumentEditor = (props) => {
  const [cleanVersion, setCleanVersion] = useState(false);
  const [showHeader, setShowHeader] = useToggle();
  const [showConditionalText, setShowConditionalText] = useToggle();
  const [supplierAlternateNames, setSupplierAlternateNames] = useToggle();
  const location = useLocation();
  const ContractType = location.pathname.split("_")[1];

  const [employment, setEmployment] = useState([
    {
      id: "0",
      html: "[Employee Name]",
      active: false
    },
    {
      id: "1",
      html: "[Date of Contract]",
      active: false
    },
    {
      id: "2",
      html: "[Employee Start Date]",
      active: false
    },
    {
      id: "3",
      html: "[Candidate Address]",
      active: false
    },
    {
      id: "4",
      html: "[Candidate Email Address]",
      active: false
    },
    {
      id: "5",
      html: "[Candidate Phone Number]",
      active: false
    },
    {
      id: "6",
      html: "[Candidate Job Title]",
      active: false
    },
    {
      id: "7",
      html: "[Candidate Annual Salary]",
      active: false
    },
    {
      id: "8",
      html: "[You will receive X share options]",
      active: false
    },
    {
      id: "9",
      html:
        "[Your share options will be X% of the Company at the date of this Employment Agreement]",
      active: false
    },
    {
      id: "10",
      html: "[X months]",
      active: false
    },
    {
      id: "11",
      html: "[Candidates Line Manager]",
      active: false
    },
    {
      id: "12",
      html: "[X months]",
      active: false
    },
    {
      id: "13",
      html: "",
      active: false
    }
  ]);

  const [commercial, setCommercial] = useState([
    {
      id: "0",
      html: "[DATE]",
      active: false
    },
    {
      id: "1",
      html: "[CONTACT]",
      active: false
    },
    {
      id: "2",
      html: "[RECIPIENT]",
      active: false
    },
    {
      id: "3",
      html: "[ADDRESS 1]",
      active: false
    },
    {
      id: "4",
      html: "[COUNTERPARTY NAME]",
      active: false
    },
    {
      id: "5",
      html: "[COUNTERPARTY ADDRESS]",
      active: false
    }
  ]);

  const [supplier, setSupplier] = useState([
    {
      id: "0",
      html: "[SERVICE CONTRACT TYPE]",
      active: false
    },
    {
      id: "1",
      html: "[SERVICE PROVIDER]",
      active: false
    },
    {
      id: "2",
      html: "[ALTERNATE NAMES]",
      active: false
    },
    {
      id: "3",
      html: "[CLIENT NAME]",
      active: false
    },
    {
      id: "4",
      html: "[PROVIDER REGISTERED NAME]",
      active: false
    }
  ]);

  const ChosenContractType = eval(ContractType);
  const setChosenContractType = eval("set" + capitalize(ContractType));

  const [drawerState, setDrawerState] = useState(true);
  const [activeHover, setActiveHover] = useState(false);

  function drawerClose() {
    setDrawerState(!drawerState);
    setActiveHover(false);
  }

  function toggleCleanView() {
    if (!cleanVersion) {
      setDrawerState(false);
      setActiveHover(false);
    } else {
      setDrawerState(true);
    }
    setCleanVersion(!cleanVersion);

    let placeholders = document.getElementsByClassName("placeholder");
    for (var i = 0; i < placeholders.length; i++) {
      if (placeholders[i].classList.contains("hidden")) {
        placeholders[i].classList.remove("hidden");
      } else {
        placeholders[i].classList.add("hidden");
      }
    }
    let redline = document.getElementsByClassName("redline");
    if (redline !== undefined) {
      for (var j = 0; j < redline.length; j++) {
        if (redline[j].classList.contains("hidden")) {
          redline[j].classList.remove("hidden");
        } else {
          redline[j].classList.add("hidden");
        }
      }
    }
  }

  const ContractName = location.pathname
    .split("_")[0]
    .split("editor/")[1]
    .replace(/-/g, " ");
  return (
    <>
      <DraftingHeader
        documentName={ContractName}
        lastEdited="Last Edited 2021/10/26"
        toggleDrawer={() => drawerClose()}
        drawerState={drawerState}
        toggleCleanView={() => toggleCleanView()}
      />
      <div className="editor">
        <div
          id="article-container"
          className={
            drawerState
              ? "article-container playbook-open"
              : "article-container"
          }
        >
          {ContractType === "employment" ? (
            <EmploymentContract
              toggleDrawer={() => setDrawerState(true)}
              toggleDrawerHighlight={() => {
                setDrawerState(true);
                setActiveHover(true);
              }}
              setActiveHover={setActiveHover}
              activeHover={activeHover}
              cleanVersion={cleanVersion}
              configFields={ChosenContractType}
              setConfigFields={setChosenContractType}
              showHeader={showHeader}
              showConditionalText={showConditionalText}
            />
          ) : ContractType === "commercial" ? (
            <CommercialContract
              toggleDrawer={() => setDrawerState(true)}
              toggleDrawerHighlight={() => {
                setDrawerState(true);
                setActiveHover(true);
              }}
              setActiveHover={setActiveHover}
              activeHover={activeHover}
              cleanVersion={cleanVersion}
              configFields={ChosenContractType}
              setConfigFields={setChosenContractType}
              showHeader={showHeader}
              showConditionalText={showConditionalText}
            />
          ) : (
            <SupplierContract
              toggleDrawer={() => setDrawerState(true)}
              toggleDrawerHighlight={() => {
                setDrawerState(true);
                setActiveHover(true);
              }}
              setActiveHover={setActiveHover}
              activeHover={activeHover}
              cleanVersion={cleanVersion}
              configFields={ChosenContractType}
              setConfigFields={setChosenContractType}
              showHeader={showHeader}
              supplierAlternateNames={supplierAlternateNames}
              setSupplierAlternateNames={setSupplierAlternateNames}
            />
          )}
        </div>
        <aside className={drawerState ? "open" : null}>
          {ContractType === "employment" ? (
            <EmploymentContractConfig
              configFields={ChosenContractType}
              setConfigFields={setChosenContractType}
              showHeader={showHeader}
              setShowHeader={setShowHeader}
              showConditionalText={showConditionalText}
              setShowConditionalText={setShowConditionalText}
            />
          ) : ContractType === "commercial" ? (
            <CommercialContractConfig
              configFields={ChosenContractType}
              setConfigFields={setChosenContractType}
              showHeader={showHeader}
              setShowHeader={setShowHeader}
              showConditionalText={showConditionalText}
              setShowConditionalText={setShowConditionalText}
            />
          ) : (
            <SupplierContractConfig
              configFields={ChosenContractType}
              setConfigFields={setChosenContractType}
              showHeader={showHeader}
              setShowHeader={setShowHeader}
              supplierAlternateNames={supplierAlternateNames}
              setSupplierAlternateNames={setSupplierAlternateNames}
            />
          )}
        </aside>
      </div>
    </>
  );
};

export default DocumentEditor;
