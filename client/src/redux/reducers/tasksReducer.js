export const initialState = {
  1: {
    id: 1,
    name: "Sample task",
    description: "Sample description",
    completed: false
  }
};

function createTask(state, { name, description }) {
  const id =
    Object.keys(state).reduce((maxId, id) => Math.max(id, maxId), -1) + 1;
  return { [id]: { id, name, description, completed: false } };
}

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      const newTask = createTask(state, action.task);
      return { ...state, ...newTask };
    case "DELETE_TASK":
      const clone = { ...state };
      delete clone[action.id];
      return clone;
    default:
      return state;
  }
}
