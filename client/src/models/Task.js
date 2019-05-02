export default class Task {
  constructor(task) {
    this.name = (task && task.name) || "";
    this.description = (task && task.description) || "";
    this.prerequisiteIDs = (task && task.prerequisiteIDs) || [];
    this.completed = (task && (task.completed || false)) || false;
    this.id = task && task.id;
  }
}
