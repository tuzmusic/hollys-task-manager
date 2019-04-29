import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Task from "../src/components/Task";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    addTask: jest.fn()
  };

  const rendered = shallow(<Task {...props} />);

  return { props, rendered };
}

describe("components", () => {
  describe("Task", () => {
    it("should render an li with the task name", () => {
      const task = { name: "sample task name" };
      const rendered = shallow(<Task task={task} />);
      expect(rendered.find("li").hasClass("task")).toBe(true);
      expect(rendered.find("li").text()).toBe(task.name);
    });
  });
});
