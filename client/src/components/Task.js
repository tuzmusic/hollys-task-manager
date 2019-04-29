import React from "react";

export default (Task = props => {
  return <li className="task">{props.children}</li>;
});
