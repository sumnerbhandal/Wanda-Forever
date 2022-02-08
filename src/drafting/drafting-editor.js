import React, { useState } from "react";
import DraftingHeader from "../_header/drafting-header";
import "./styles.scss";
import ContractConfig from "./contract-config";
import EmploymentContract from "./_contract-types/employment";
import CommercialContract from "./_contract-types/commercial";
import SupplierContract from "./_contract-types/supplier";
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
  const location = useLocation();
  const ContractType = location.pathname.split("_")[1];

  const [employment, setEmployment] = useState([
    {
      id: "0",
      html: "[Company Name Header]",
      active: false
    },
    {
      id: "1",
      html: "[Company Address]",
      active: false
    },
    {
      id: "2",
      html: "[Company Phone Number]",
      active: false
    },
    {
      id: "3",
      html: "[Date]",
      active: false
    },
    {
      id: "4",
      html: "[Company Name]",
      active: false
    },
    {
      id: "5",
      html: "[Employee Name]",
      active: false
    },
    {
      id: "6",
      html: "[Employee Address]",
      active: false
    },
    {
      id: "7",
      html: "[Place]",
      active: false
    }
  ]);

  const [commercial, setCommercial] = useState([
    {
      id: "0",
      html: "[Company Name Header]",
      active: false
    },
    {
      id: "1",
      html: "[Company Address]",
      active: false
    },
    {
      id: "2",
      html: "[Company Phone Number]",
      active: false
    },
    {
      id: "3",
      html: "[Date]",
      active: false
    },
    {
      id: "4",
      html: "[Company Name]",
      active: false
    },
    {
      id: "5",
      html: "[Employee Name]",
      active: false
    },
    {
      id: "6",
      html: "[Employee Address]",
      active: false
    },
    {
      id: "7",
      html: "[Place]",
      active: false
    }
  ]);

  const [supplier, setSupplier] = useState([
    {
      id: "0",
      html: "[Company Name Header]",
      active: false
    },
    {
      id: "1",
      html: "[Company Address]",
      active: false
    },
    {
      id: "2",
      html: "[Company Phone Number]",
      active: false
    },
    {
      id: "3",
      html: "[Date]",
      active: false
    },
    {
      id: "4",
      html: "[Company Name]",
      active: false
    },
    {
      id: "5",
      html: "[Employee Name]",
      active: false
    },
    {
      id: "6",
      html: "[Employee Address]",
      active: false
    },
    {
      id: "7",
      html: "[Place]",
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
              showConditionalText={showConditionalText}
            />
          )}
        </div>
        <aside className={drawerState ? "open" : null}>
          <ContractConfig
            configFields={ChosenContractType}
            setConfigFields={setChosenContractType}
            showHeader={showHeader}
            setShowHeader={setShowHeader}
            showConditionalText={showConditionalText}
            setShowConditionalText={setShowConditionalText}
          />
        </aside>
      </div>
    </>
  );
};

export default DocumentEditor;
