import Task from '../src/models/Task'

describe('models', () => {
  describe('Task', () => {
    const task = new Task({name: "sample name", description: "sample description"})
    console.log(task);
    
    it('initializes with a name and description', () => {
      expect(task.name).toEqual("sample name")
      expect(task.description).toEqual("sample description")
    });
    it('initializes as incomplete', () => {
      expect(task.completed).toEqual(false)
    });
    it('initializes with an empty prerequisite_ids array', () => {
      expect(task.prerequisite_ids).toEqual([])
    });
  })
  
})
