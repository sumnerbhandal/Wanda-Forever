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

const query = [
  createData(
    "NDA",
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
    "employment"
  ),
  createData(
    "NDA",
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
    "employment"
  )
];

export default query;
