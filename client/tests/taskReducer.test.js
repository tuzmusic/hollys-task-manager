import reducer, { initialState } from "../src/redux/reducers/tasksReducer";

describe("todos reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});
