import Task from '../src/models/Task'

describe('models', () => {
  describe('Task', () => {
    const task = new Task({name: "sample name", description: "sample description"})
    
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

    it('defaults to a blank name and description', () => {
      const blankTask = new Task()
      expect(blankTask.name).toEqual('')
      expect(blankTask.description).toEqual('')
    });

    it('can be initialized with prerequisites', () => {
      const newTask = new Task({name:"sample name", prerequisite_ids:[1,2]})
      expect(newTask.prerequisite_ids).toEqual([1,2]);
    });

    it('can be initialized with a passed id', () => {
      const newTask = new Task({name: "sample name", id: 5})
      expect(newTask.id).toEqual(5)
    });
  })
  
})
