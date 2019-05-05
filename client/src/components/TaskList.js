import React from "react";
import TaskComponent from "./TaskComponent";

const TaskList = ({ tasks, onTaskCheck }) => {
  return (
    <div className="task-list-container">
      <div className="tasks">
        {Object.entries(tasks).map(([id, task]) => {
          return (
            <TaskComponent
              key={id}
              task={task}
              completable={task.completable(tasks)}
              onChange={onTaskCheck}
            />
          );
        })}
      </div>
    </div>
  );
};
export default TaskList;
