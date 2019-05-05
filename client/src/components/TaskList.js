import React from "react";
import TaskComponent from "./TaskComponent";
import { connect } from "react-redux";
import { toggleTask, addTask } from "../redux/actions/tasksActions";
import TaskObject from '../models/Task'

export class TaskList extends React.Component {
  onTaskCheck(id) {
    const task = this.props.tasks[id];
    this.props.toggleTask(task);
  }

  onSaveTask(taskName) {
    const newTask = new TaskObject({ name: taskName });
    console.log(newTask);
    this.props.addTask(newTask);
  }

  render() {
    const { tasks } = this.props;

    return (
      <div className="task-list-container">
        <div className="tasks">
          {Object.entries(tasks).map(([id, task]) => {
            return (
              <TaskComponent
                key={id}
                task={task}
                // completable={task.completable(tasks)}
                onChange={this.onTaskCheck.bind(this, id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { tasks: state.tasks };
// };

export default connect(
  null,
  { toggleTask, addTask }
)(TaskList);
