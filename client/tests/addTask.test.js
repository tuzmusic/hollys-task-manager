import * as actions from "../src/redux/tasksActions";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const task = { name: "Finish docs" };
    const expectedAction = { type: "ADD_TASK", task };
    expect(actions.addTask(task)).toEqual(expectedAction);
  });
});
