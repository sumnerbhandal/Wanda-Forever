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
  )
];

export default review;
