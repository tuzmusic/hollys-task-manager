import React from "react";
// import "../stylesheets/tasks.css";

const Task = ({task, onChange}) => {
  const changeHandler = onChange || (() => console.log("changed"))
  
  return (
    <li className="task">
      <input type="checkbox" checked={task.completed} onChange={changeHandler} />
      {task.name}
    </li>
  );
}

export default Task
