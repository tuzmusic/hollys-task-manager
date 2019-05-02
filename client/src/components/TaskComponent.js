import React from "react";
import "../stylesheets/tasks.css";

const Task = ({task, onChange}) => {
  const changeHandler = onChange
  
  return (
    <li className={`task ${task.completed && "completed"}`}>
      <input type="checkbox" checked={task.completed} onChange={changeHandler} />
      {task.name}
    </li>
  );
}

export default Task
