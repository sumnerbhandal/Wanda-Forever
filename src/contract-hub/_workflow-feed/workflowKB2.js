function createData(name, dueDate, status, assignedBy, contractRef) {
  return {
    name,
    dueDate,
    status,
    assignedBy,
    contractRef
  };
}

const workflowKB2 = [
  createData("High Value Contract", "2022/06/08", "Complete", "Sumner Bhandal"),
  createData("Draft First Mark Up", "2022/06/16", "Complete", "Kyra Byrne")
];

export default workflowKB2;
