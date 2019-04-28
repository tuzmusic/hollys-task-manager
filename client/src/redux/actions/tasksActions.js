export function addTask(task) {
 return { type: 'ADD_TASK', task } 
}

export function toggleTask(task) {
  return {type: "EDIT_TASK", id: task.id, key: 'completed', value: !task.completed }
}