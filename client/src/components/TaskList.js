import React from "react";
import TaskComponent from "./TaskComponent";
import TaskForm from "./TaskForm";
import { connect } from "react-redux";
import { toggleTask, addTask } from "../redux/actions/tasksActions";
import TaskObject from '../models/Task'
// import '../stylesheets/tasks.css' // comment this for tests

class TaskList extends React.Component {
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
        <TaskForm onSubmit={this.onSaveTask.bind(this)} />
        <div className="tasks">
          {Object.keys(tasks).map(id => {
            return (
              <TaskComponent
                key={id}
                task={tasks[id]}
                onChange={this.onTaskCheck.bind(this, id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

export default connect(
  mapStateToProps,
  { toggleTask, addTask }
)(TaskList);
