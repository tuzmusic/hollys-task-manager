import React from "react";
import Task from "./TaskComponent";
import {connect} from 'react-redux'
// import '../stylesheets/tasks.css' // comment this for tests

class TaskList extends React.Component {

  onTaskCheck(id) {
    const task = this.state.tasks[id];
    this.setState({
      tasks: { ...this.state.tasks, [id]: {...task, completed: !task.completed } }
    });
  }

  render() {
    const { tasks } = this.props;

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
  return ({tasks: state.tasks})
}

export default connect(mapStateToProps)(TaskList)