import React from "react";

const Task = props => {
  console.log(props);
  return (
    <li
      className={`task ${props.task.completed &&
        "completed"} ${props.completable && "completable"}`}
    >
      <input
        type="checkbox"
        onChange={props.onChange.bind(null, props.task.id)}
        checked={props.task.completed}
      />
      {props.task.name}
    </li>
  );
};

export default Task;
