export default class Task {
  constructor ({name = '', description = '', prerequisite_ids =[] }) {
    this.name = name
    this.description = description
    this.prerequisite_ids = prerequisite_ids
    this.completed = false
  }
}