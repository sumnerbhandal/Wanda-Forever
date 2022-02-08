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
    "Commercial",
    "Commercial Contract Example",
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
  )
];

export default review;
