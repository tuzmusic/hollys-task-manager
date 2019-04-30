import React from "react";
import "../stylesheets/tasks.css";

const Task = ({task}) => {
  return (
    <li className="task">
      <input type="checkbox" checked={task.completed} />
      {task.name}
    </li>
  );
}

export default Task
