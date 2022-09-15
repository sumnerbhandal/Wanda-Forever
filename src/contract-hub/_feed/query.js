import * as React from "react";

function createData(type, name, group, lastEdited, status, contractRef) {
  return {
    type,
    name,
    group,
    lastEdited,
    status,
    contractRef
  };
}

"Please Select",
  "Amendment",
  "Consulting Agreement Company",
  "Consulting Agreement Individual",
  "Distribution Agreement",
  "End User License Agreement",
  "License Agreement",
  "Material Transfer Agreement One-Way Academic",
  "Material Transfer Agreement One-Way Company",
  "Material Transfer Agreement One-Way Prototype",
  "Material Transfer Agreement Mutual",
  "NDA One-Way",
  "NDA Two-Way",
  "NDA Three-Way",
  "Non-Recurring Engineering Agreement",
  "Procurement Agreement",
  "Quality Agreement Repligen Supply",
  "Quality Agreement Procurement",
  "Real Estate Agreement",
  "Recruiting Agency Agreement",
  "Rental Agreement",
  "Research Agreement",
  "Service Agreement",
  "Strategic Agreement",
  "Supply Agreement",
  "Other";

const query = [
  createData(
    "Consulting Agreement Company",
    "REDACTED CONTRACT 1234",
    "Example Test Group",
    "2021/10/01",
    "Incomplete",
    "employment"
  ),
  createData(
    "NDA",
    "Completed NDA",
    "Production Test Group",
    "2022/10/01",
    "Complete",
    "commercial"
  ),
  createData(
    "Material Transfer Agreement One-Way Academic",
    "REDACTED CONTRACT 1234",
    "Example Test Group",
    "2021/10/01",
    "Incomplete",
    "franchise"
  ),
  createData(
    "Recruiting Agency Agreement",
    "Completed NDA",
    "Production Test Group",
    "2022/10/01",
    "Complete",
    "supplier"
  ),
  createData(
    "Non-Recurring Engineering Agreement",
    "Completed NDA",
    "Production Test Group",
    "2022/10/01",
    "Complete",
    "supplier"
  )
];

export default query;
