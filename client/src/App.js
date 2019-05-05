import React from "react";
import "./App.css";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

// import EditTaskView from "./components/EditTaskView";
import TasksIndex from "./components/TasksIndex";
import taskReducer from "./redux/reducers/tasksReducer";

const reducer = combineReducers({ tasks: taskReducer });
const store = createStore(reducer, {});

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        {/* <EditTaskView /> */}
        <TasksIndex/>
      </div>
    </Provider>
  );
}

export default App;
