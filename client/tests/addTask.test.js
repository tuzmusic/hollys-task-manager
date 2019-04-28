import * as actions from "../src/redux/actions/tasksActions";

describe("addTask", () => {
  it("should create an action to add a task", () => {
    const task = { name: "Finish docs" };
    const expectedAction = { type: "ADD_TASK", task };
    expect(actions.addTask(task)).toEqual(expectedAction);
  });
});

describe("toggleTask", () => {
  it("should return a task id and completeness for the task", () => {
    const task = { id: 1, name: "Finish docs", completed: false };
    const expectedAction = {
      type: "EDIT_TASK",
      id: 1,
      key: "completed",
      value: true
    };
    expect(actions.toggleTask(task)).toEqual(expectedAction);
  });
});
