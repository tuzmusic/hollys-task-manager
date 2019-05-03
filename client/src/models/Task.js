export default class Task {
  constructor(task) {
    this.name = (task && task.name) || "";
    this.description = (task && task.description) || "";
    this.prerequisiteIDs = (task && task.prerequisiteIDs) || [];
    this.completed = (task && (task.completed || false)) || false;
    this.id = task && task.id;
  }

  completable(allTasks) {
    const prereqs = this.prerequisiteIDs.map(id => allTasks[id]);
    let completable = true;
    prereqs.forEach(task => {
      if (!task.completed) {
        completable = false;
      }
    });
    return completable;
  }

  allExceptThis(allTasks) {
    return Task.allExcept({ task: this, allTasks });
  }

  addPrerequisites(tasks) {
    this.prerequisiteIDs = tasks.map(task => task.id);
  }
}

Task.allExcept = ({ task, allTasks }) => {
  let allClone = { ...allTasks };
  delete allClone[task.id];
  return allClone;
};
