import React from "react";
import Task from "./TaskComponent";
// import '../stylesheets/tasks.css' // comment this for tests

export default class TaskList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { tasks: this.props.tasks };
  }
  

  onTaskCheck(id) {
    console.log("checked");
    
    const task = this.state.tasks[id];
    this.setState({
      tasks: { ...this.state.tasks, [id]: {...task, completed: !task.completed } }
    });
  }

  render() {
    const { tasks } = this.state;

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
