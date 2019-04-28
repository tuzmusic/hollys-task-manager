export const initialState = {
  1: {
    id: 1,
    name: "Sample task",
    description: "Sample description",
    completed: false
  }
}

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}