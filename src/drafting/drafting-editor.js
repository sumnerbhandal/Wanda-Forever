import React, { useState } from "react";
import DraftingHeader from "../_header/drafting-header";
import "./styles.scss";
import EmploymentContract from "./_contract-types/employment/employment";
import EmploymentContractConfig from "./_contract-types/employment/employment-config";
import CommercialContract from "./_contract-types/commercial/commercial";
import CommercialContractConfig from "./_contract-types/commercial/commercial-config";
import SupplierContract from "./_contract-types/supplier/supplier";
import SupplierContractConfig from "./_contract-types/supplier/supplier-config";
import FranchiseContract from "./_contract-types/franchise/franchise";
import FranchiseContractConfig from "./_contract-types/franchise/franchise-config";
import NDAContract from "./_contract-types/nda/nda";
import NDAContractConfig from "./_contract-types/nda/nda-config";
import ToolTip from "../_notification/tooltip/tooltip";
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
      html: "[EMPLOYEE NAME]",
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
      html: "[X%]",
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

  const [nda, setNda] = useState([
    {
      id: "0",
      html: "[DATE]",
      active: false
    },
    {
      id: "1",
      html: "[COUNTERPARTY]",
      active: false
    },
    {
      id: "2",
      html: "[XXX]",
      active: false
    },
    {
      id: "3",
      html: "[COUNTERPARTY ADDRESS]",
      active: false
    },
    {
      id: "4",
      html: "Robin Corporation (USA)",
      active: false
    },
    {
      id: "5",
      html: "SEC CIK #0000730272",
      active: false
    },
    {
      id: "6",
      html:
        "41 Seyon Street, Building 1, Suite 100, Waltham, Massachusetts 02453, USA",
      active: false
    },
    {
      id: "7",
      html: "[PROJECT]",
      active: false
    }
  ]);

  const [ndatwo, setNdatwo] = useState([
    {
      id: "0",
      html: "16/06/22",
      active: false
    },
    {
      id: "1",
      html: "Robin AI",
      active: false
    },
    {
      id: "2",
      html: "123456",
      active: false
    },
    {
      id: "3",
      html: "8 Devonshire Square",
      active: false
    },
    {
      id: "4",
      html: "Robin Corporation (USA)",
      active: false
    },
    {
      id: "5",
      html: "SEC CIK #0000730272",
      active: false
    },
    {
      id: "6",
      html:
        "41 Seyon Street, Building 1, Suite 100, Waltham, Massachusetts 02453, USA",
      active: false
    },
    {
      id: "7",
      html: "Project X",
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

  const [franchise, setFranchise] = useState([
    {
      id: "0",
      html: "[FRANCHISE AGREEMENT DATE]",
      active: false
    },
    {
      id: "1",
      html: "[FRANCHISEE NAME]",
      active: false
    },
    {
      id: "2",
      html: "[FRANCHISEE ADDRESS]",
      active: false
    },
    {
      id: "3",
      html: "[X]",
      active: false
    },
    {
      id: "4",
      html: "[X]",
      active: false
    },
    {
      id: "5",
      html: "[EMAIL]",
      active: false
    },
    {
      id: "6",
      html: "[EXTENSION FEE]",
      active: false
    },
    {
      id: "7",
      html: "[PLEASE SELECT]",
      active: false
    },
    {
      id: "8",
      html: "[GUARANTORS]",
      active: false
    },
    {
      id: "9",
      html: "[INITIAL FEE]",
      active: false
    },
    {
      id: "10",
      html: "[OUTLET ADDRESS]",
      active: false
    },
    {
      id: "11",
      html: "[RENEWAL FEE]",
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
        user={props.user}
      />
      <ToolTip
        className="playbook"
        message="Updating the text in here will update the contract in real time"
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
          ) : ContractType === "franchise" ? (
            <FranchiseContract
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
          ) : ContractType === "nda" ? (
            <NDAContract
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
          ) : ContractType === "ndatwo" ? (
            <NDAContract
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
          ) : ContractType === "nda" ? (
            <NDAContractConfig
              configFields={ChosenContractType}
              setConfigFields={setChosenContractType}
              showHeader={showHeader}
              setShowHeader={setShowHeader}
              showConditionalText={showConditionalText}
              setShowConditionalText={setShowConditionalText}
            />
          ) : ContractType === "ndatwo" ? (
            <NDAContractConfig
              configFields={ChosenContractType}
              setConfigFields={setChosenContractType}
              showHeader={showHeader}
              setShowHeader={setShowHeader}
              showConditionalText={showConditionalText}
              setShowConditionalText={setShowConditionalText}
            />
          ) : ContractType === "franchise" ? (
            <FranchiseContractConfig
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
