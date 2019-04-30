export function addTask(task) {
  return { type: "ADD_TASK", task };
}

export function toggleTask(task) {
  console.log("toggleTask called on", task);
  
  return {
    type: "EDIT_TASK",
    id: task.id,
    changes: { completed: !task.completed }
  };
}

export function editTaskName(task, name) {
  return {
    type: "EDIT_TASK",
    id: task.id,
    changes: { name }
  };
}

export function editTaskDescription(task, description) {
  return {
    type: "EDIT_TASK",
    id: task.id,
    changes: { description }
  };
}

export function deleteTask(task) {
  return { type: "DELETE_TASK", id: task.id };
}
