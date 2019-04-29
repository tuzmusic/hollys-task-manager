import React from "react";

const Task = props => {
  return <li className="task">{props.task.name}</li>;
}

export default Task
