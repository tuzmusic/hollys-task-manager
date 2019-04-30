import React from "react";
import Task from "./TaskComponent";
import '../stylesheets/tasks.css'

export default class TaskList extends React.Component {
  render() {
    const {tasks} = this.props
    return (
      <div className="tasks">
        {Object.keys(tasks).map(id => {
          return <Task key={id} task={tasks[id]} />;
        })}
      </div>
    );
  }
}
