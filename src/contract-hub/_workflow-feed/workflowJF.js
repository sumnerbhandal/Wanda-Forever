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
  createData(
    "[Internal Review] High Value Contract",
    "2022/03/12",
    "Complete",
    "Richard Robinson"
  ),
  createData(
    "[Internal Review] Draft First Mark Up",
    "2022/06/16",
    "To Do",
    "Kyra Byrne"
  )
];

export default workflowJF;
