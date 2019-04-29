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
      changes: { completed: true }
    };
    expect(actions.toggleTask(task)).toEqual(expectedAction);
  });
});

describe("editTaskName", () => {
  it("should return a task id and new name for the task", () => {
    const task = { id: 1, name: "Finish docs" };
    const newName = "Do this instead";
    const expectedAction = {
      type: "EDIT_TASK",
      id: 1,
      changes: { name: newName }
    };
    expect(actions.editTaskName(task, newName)).toEqual(expectedAction);
  });
});

describe("editTaskDescription", () => {
  it("should return a task id and new name for the task", () => {
    const task = { id: 1, name: "Finish docs" };
    const newDescription = "Do this instead";
    const expectedAction = {
      type: "EDIT_TASK",
      id: 1,
      changes: { description: newDescription }
    };
    expect(actions.editTaskDescription(task, newDescription)).toEqual(
      expectedAction
    );
  });
});

describe("deleteTask", () => {
  it("should return delete action a task id", () => {
    const task = { id: 1, name: "Finish docs" };
    const expectedAction = {
      type: "DELETE_TASK",
      id: 1
    };
    expect(actions.deleteTask(task)).toEqual(expectedAction);
  });
});
