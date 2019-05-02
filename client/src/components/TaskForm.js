import React from "react";
// import "../stylesheets/tasks.css";

class TaskForm extends React.Component {
  state = { text: "sample" };

  onTextChange(event) {
    this.setState({ text: event.target.value }, () => console.log(this.state));
  }

  render() {
    return (
      <span className="task-input">
        <input
          value={this.state.text}
          onChange={this.onTextChange.bind(this)}
        />
        <button
          type="submit"
          onClick={() => {
            console.log("from onClick", this.state.text);
            this.props.onSubmit(this.state.text);
          }}
        >
          Save
        </button>
      </span>
    );
  }
}

export default TaskForm;
