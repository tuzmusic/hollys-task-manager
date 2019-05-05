import React from "react";
import TaskComponent from "./TaskComponent";
// import TaskObject from '../models/Task'

export default class TaskList extends React.Component {
  render() {
    const { tasks, onTaskCheck } = this.props;

    return (
      <div className="task-list-container">
        <div className="tasks">
          {Object.entries(tasks).map(([id, task]) => {
            return (
              <TaskComponent
                key={id}
                task={task}
                // completable={task.completable(tasks)}
                onChange={onTaskCheck}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
