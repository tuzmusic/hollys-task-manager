import Task from "../src/models/Task";

describe("models", () => {
  describe("Task", () => {
    const task = new Task({
      name: "sample name",
      description: "sample description"
    });

    it("initializes with a name and description", () => {
      expect(task.name).toEqual("sample name");
      expect(task.description).toEqual("sample description");
    });

    it("initializes as incomplete", () => {
      expect(task.completed).toEqual(false);
    });

    it("initializes with an empty prerequisiteIDs array", () => {
      expect(task.prerequisiteIDs).toEqual([]);
    });

    it("defaults to a blank name and description", () => {
      const blankTask = new Task();
      expect(blankTask.name).toEqual("");
      expect(blankTask.description).toEqual("");
    });

    it("can be initialized with prerequisites", () => {
      const newTask = new Task({
        name: "sample name",
        prerequisiteIDs: [1, 2]
      });
      expect(newTask.prerequisiteIDs).toEqual([1, 2]);
    });

    it("can be initialized with a passed id", () => {
      const newTask = new Task({ name: "sample name", id: 5 });
      expect(newTask.id).toEqual(5);
    });
  });

  describe("task.completable(tasks)", () => {
    const doFirst = new Task({
      name: "sample name",
      id: 1,
      prerequisiteIDs: []
    });
    const doSecond = new Task({
      name: "sample name",
      id: 2,
      prerequisiteIDs: [1]
    });
    const doLast = new Task({
      name: "sample name",
      prerequisiteIDs: [1, 2]
    });
    const allTasks = { 1: doFirst, 2: doSecond, 3: doLast };
    it("takes all the tasks to see if the current task is completabe/accessible, visible", () => {
      expect(doFirst.completable(allTasks)).toBe(true);
      expect(doSecond.completable(allTasks)).toBe(false);
      expect(doLast.completable(allTasks)).toBe(false);
    });
  });

  describe("Task.allExcept", () => {
    const task1 = new Task({ name: "task", id: 1 });
    const task2 = new Task({ name: "task", id: 2 });
    const task3 = new Task({ name: "task", id: 3 });
    const allTasks = { 1: task1, 2: task2, 3: task3 };
    it("returns all tasks except the given task", () => {
      const allExcept = Task.allExcept({task: task1, allTasks }) 
      expect(allExcept).toEqual({2: task2, 3: task3})
    });

    it('is also an instance method as "allExceptThis(alltasks)', () => {
      expect(task1.allExceptThis(allTasks)).toEqual({
        2: task2,
        3: task3
      });
    });
  });
});
