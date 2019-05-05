import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { connect } from "react-redux";
import { toggleTask, addTask } from "../redux/actions/tasksActions";
import TaskObject from "../models/Task";

class TasksIndex extends React.Component {
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
    return (
      <div className="task-list-container">
        <TaskForm onSubmit={this.onSaveTask.bind(this)} />
        <div className="tasks">
          <TaskList tasks={this.props.tasks} />
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
)(TasksIndex);
