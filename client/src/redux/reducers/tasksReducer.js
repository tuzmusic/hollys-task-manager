import Task from '../../models/Task'

export const initialState = { // using "defaultState" here breaks test. FIXME.
  1: {
    id: 1,
    name: "Sample task",
    description: "Sample description",
    completed: false
  }
};

const defaultState = {
  1: new Task({ id: 1, name: "do first" }),
  2: new Task({ id: 2, name: "do second", prerequisiteIDs: [2, 1] }),
  3: new Task({ id: 3, name: "do last", prerequisiteIDs: [2, 1] }),
  4: new Task({ id: 4, name: "another task" })
};

function createTask(state, taskInfo) {
  const id = taskInfo.id || 
    Object.keys(state).reduce((maxId, id) => Math.max(id, maxId), -1) + 1;
  return new Task({ ...taskInfo, id: id});
}

export default function taskReducer(state = defaultState, action) {
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
