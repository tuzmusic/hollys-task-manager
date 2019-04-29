import reducer, { initialState } from "../src/redux/reducers/tasksReducer";

describe("tasks reducer", () => {
  it("can add a task", () => {
    const newTask = {
      name: "new task name",
      description: "new task description"
    };
    const action = { type: "ADD_TASK", task: newTask };

    const expectedState = {
      ...initialState,
      2: { ...newTask, id: 2, completed: false }
    };

    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("can delete a task", () => {
    const action = { type: "DELETE_TASK", id: 2 };
    const newTask = {
      name: "new task name",
      description: "new task description",
      id: 2,
      completed: false
    };
    const newState = {
      ...initialState,
      2: { ...newTask }
    };

    expect(reducer(newState, action)).toEqual(initialState);
  });

  it("can edit a task's name", () => {
    const action = {type:"EDIT_TASK", id: 1, changes: {name: "new name"}}
    const newState = reducer(initialState, action)
    expect(newState[1].name).toEqual("new name")
  });
});
