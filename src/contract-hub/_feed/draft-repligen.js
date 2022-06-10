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
  createData("Employment"),
  createData("NDA"),
  createData("Supplier"),
  createData("Franchise")
];

export default review;
