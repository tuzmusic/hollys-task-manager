import React from "react";

const Task = ({task, ...props}) => {
  
  return (
    <li className={`task ${task.completed && "completed"}`}>
      <input
        type="checkbox"
        onChange={props.onChange.bind(null, task.id)}
        checked={task.completed}
      />
      {task.name}
    </li>
  );
}

export default Task
