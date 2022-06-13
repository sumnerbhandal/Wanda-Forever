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
  createData("Draft First Mark Up", "2022/06/14", "To Do", "Sumner Bhandal")
];

export default workflow;
