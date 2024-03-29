function createData(type, name, lastEditedBy, lastEdited, contractRef) {
  return {
    type,
    name,
    lastEditedBy,
    lastEdited,
    contractRef
  };
}

const review = [
  createData(
    "Employment",
    "Employment Contract Example",
    "Fred Fox",
    "2021/10/01",
    "employment"
  ),
  createData(
    "NDA",
    "Non-disclosure Agreement",
    "Bernard Nixon",
    "2021/09/19",
    "commercial"
  ),
  createData(
    "Supplier",
    "Supplier Contract Example",
    "Dianna Allen",
    "2021/08/14",
    "supplier"
  ),
  createData(
    "Franchise",
    "International Franchise Agreement",
    "Bernard Nixon",
    "2021/09/02",
    "franchise"
  ),
  createData("NDA", "NDA Two-Way", "Kyra Byrne", "2022/06/16", "nda"),
  createData("NDA", "NDA Two-Way", "Kyra Byrne", "2022/06/16", "ndatwo")
];

export default review;
