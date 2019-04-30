import React from "react";
import "./App.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import TaskList from "./components/TaskList";
import Task from "./models/Task";
import taskReducer from "./redux/reducers/tasksReducer";

const reducer = combineReducers({ tasks: taskReducer });
const store = createStore(reducer, {});

const mockTasks = {
  1: new Task({ id: 1, name: "first task" }),
  2: new Task({ id: 2, name: "second task, completed", completed: true }),
  3: new Task({ id: 3, name: "third task" }),
  4: new Task({ id: 4, name: "fourth task" })
};

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <TaskList tasks={mockTasks} />
      </div>
    </Provider>
  );
}

export default App;
