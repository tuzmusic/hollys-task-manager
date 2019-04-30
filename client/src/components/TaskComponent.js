import React from "react";

const Task = ({task}) => {
  return (
    <li className="task">
      <input type="checkbox" checked={task.completed} />
      {task.name}
    </li>
  );
}

export default Task
