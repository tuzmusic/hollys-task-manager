import React from "react";
import { connect } from "react-redux";
import { toggleTask, addTask } from "../redux/actions/tasksActions";
import TaskObject from "../models/Task";
import TaskList from "./TaskList";

class EditTaskView extends React.Component {
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
    const { tasks, task } = this.props;

    return (
      <div className="general-container">
        <p>
          <b>Editing: </b>
          {task.name}
        </p>
        <div className="tasks">
          <TaskList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks, task: state.tasks[1] };
};

export default connect(
  mapStateToProps,
  { toggleTask, addTask }
)(EditTaskView);
