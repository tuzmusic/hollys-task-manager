import React from "react";
import Task from "./TaskComponent";
import { connect } from "react-redux";
import { toggleTask } from "../redux/actions/tasksActions";
// import '../stylesheets/tasks.css' // comment this for tests

class TaskList extends React.Component {
  onTaskCheck(id) {
    const task = this.props.tasks[id];
    this.props.toggleTask(task);
  }

  render() {
    const { tasks } = this.props;
    console.log("render TaskList");

    return (
      <div className="tasks">
        {Object.keys(tasks).map(id => {
          return (
            <Task
              key={id}
              task={tasks[id]}
              onChange={this.onTaskCheck.bind(this, id)}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tasks: state.tasks };
};

export default connect(
  mapStateToProps,{toggleTask}
)(TaskList);
