import Task from '../../models/Task'

export const initialState = {
  1: {
    id: 1,
    name: "Sample task",
    description: "Sample description",
    completed: false
  }
};

function createTask(state, taskInfo) {
  const id = taskInfo.id || 
    Object.keys(state).reduce((maxId, id) => Math.max(id, maxId), -1) + 1;
  return new Task({ ...taskInfo, id: id});
}

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = createTask(state, action.task);
      return { ...state, [newTask.id]: newTask };
    case "DELETE_TASK":
      const clonedState = { ...state };
      delete clonedState[action.id];
      return clonedState;
    case "EDIT_TASK":
      return {...state, [action.id]: {...state[action.id], ...action.changes}}
    default:
      return state;
  }
}
