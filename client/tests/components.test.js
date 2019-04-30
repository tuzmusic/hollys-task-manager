import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Task from "../src/components/TaskComponent";
import TaskList from "../src/components/TaskList";
Enzyme.configure({ adapter: new Adapter() });

describe("components", () => {
  describe("Task", () => {
    const task = { name: "sample task name", completed: false };
    const TaskComponent = mount(<Task task={task} />);

    it("should render an li with the task name", () => {
      expect(TaskComponent.find("li").hasClass("task")).toBe(true);
      expect(TaskComponent.find("li").text()).toBe(task.name);
    });

    it("should render a checkbox that reflects whether a task is completed", () => {
      expect(TaskComponent.prop("task")).toEqual(task);
      expect(TaskComponent.find({ type: "checkbox" })).toHaveLength(1);

      let checkbox = TaskComponent.find({ type: "checkbox" });
      expect(checkbox.props().checked).toEqual(false);
    });
  });

  describe("TaskList", () => {
    it("should render a Task for each task in props.tasks", () => {
      const tasks = {
        1: { id: 1, name: "first task" },
        2: { id: 2, name: "second task" }
      };

      const List = mount(<TaskList tasks={tasks} />);
      expect(List.find("Task")).toHaveLength(2);
    });
  });
});
