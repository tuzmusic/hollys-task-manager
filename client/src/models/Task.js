export default class Task {
  constructor (task) {
    this.name = (task && task.name) || ""
    this.description = (task && task.description) || ""
    this.prerequisite_ids = (task && task.prerequisite_ids) || []
    this.completed = false
  }
}