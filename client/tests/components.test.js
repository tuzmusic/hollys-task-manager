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
    it("should render self and subcomponents", () => {
      const { rendered } = setup();

      expect(rendered.find("li").hasClass("task")).toBe(true);

      // const todoInputProps = rendered.find("TodoTextInput").props();
      // expect(todoInputProps.newTodo).toBe(true);
      // expect(todoInputProps.placeholder).toEqual("What needs to be done?");
    });

    // it("should call addTodo if length of text is greater than 0", () => {
    //   const { rendered, props } = setup();
    //   const input = rendered.find("TodoTextInput");
    //   input.props().onSave("");
    //   expect(props.addTodo.mock.calls.length).toBe(0);
    //   input.props().onSave("Use Redux");
    //   expect(props.addTodo.mock.calls.length).toBe(1);
    // });
  });
});
