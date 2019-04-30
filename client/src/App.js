import React from "react";
import "./App.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import TaskComponent from "./components/TaskComponent";
import Task from "./models/Task";
import taskReducer from "./redux/reducers/tasksReducer";

const reducer = combineReducers({ tasks: taskReducer });
const store = createStore(reducer, {});

function App() {
  const someTask = new Task({ name: "Sample task!" });

  return (
    <Provider store={store}>
      <div className="App">
        <TaskComponent task={someTask} />
      </div>
    </Provider>
  );
}

export default App;
