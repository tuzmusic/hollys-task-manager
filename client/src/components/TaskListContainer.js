import React from "react";
import TaskList from "./TaskList";
import { connect } from "react-redux";

export default (TaskListContainer = ({ tasks, onTaskCheck }) => {
  return <TaskList onTaskCheck={onTaskCheck} tasks={tasks} />;
});

connect(mapStateToProps)(TaskListContainer);
