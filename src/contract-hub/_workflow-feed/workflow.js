function createData(name, dueDate, status, assignedBy, contractRef) {
  return {
    name,
    dueDate,
    status,
    assignedBy,
    contractRef
  };
}

const workflow = [
  createData("High Value Contract", "2022/06/08", "Complete", "Sumner Bhandal")
];

export default workflow;
