export function addTask(task) {
 return { type: 'ADD_TASK', task } 
}

export function toggleTask(task) {
  return {type: "EDIT_TASK", id: task.id, key: 'completed', value: !task.completed }
}

export function editTaskName(task, name) {
  return {
    type: "EDIT_TASK",
    id: task.id,
    key: "name",
    value: name
  }; 
}

export function editTaskDescription(task, description) {
  return {
    type: "EDIT_TASK",
    id: task.id,
    key: "description",
    value: description
  }; 
}

export function deleteTask(task) {
  return {type: 'DELETE_TASK', id: task.id}
}