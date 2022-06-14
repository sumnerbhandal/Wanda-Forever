function createData(name, dueDate, status, assignedBy, contractRef) {
  return {
    name,
    dueDate,
    status,
    assignedBy,
    contractRef
  };
}

const workflowJF = [
  createData("Draft First Mark Up", "2022/06/16", "Complete", "Kyra Byrne")
];

export default workflowJF;
