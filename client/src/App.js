import React from "react";
import "./App.css";
import TaskComponent from "./components/TaskComponent";
import Task from "./models/Task";

function App() {
  const someTask = new Task ({ name: "Sample task!" });
  console.log(someTask);
  
  return (
    <div className="App">
      <TaskComponent task={someTask} />
    </div>
  );
}

export default App;
