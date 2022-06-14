function createData(name, dueDate, status, assignedBy, contractRef) {
  return {
    name,
    dueDate,
    status,
    assignedBy,
    contractRef
  };
}

const workflowKB = [
  createData("Draft First Mark Up", "2022/06/08", "Complete", "Sumner Bhandal"),
  createData("Draft First Mark Up", "2022/06/14", "To Do", "Kyra Byrne")
];

export default workflowKB;
