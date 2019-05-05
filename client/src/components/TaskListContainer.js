import React from "react";
import TaskList from "./TaskList";

const TaskListContainer = (props) => {
  return <TaskList onTaskCheck={props.onTaskCheck} tasks={props.tasks} />;
};

export default TaskListContainer
