require 'rails_helper'


RSpec.describe Task, type: :model do
  let(:task) { Task.create(name: "Do a thing") }

  it "has a name" do
    expect(Task).to respond_to(:name)  
  end

  it "has a 'completed' field, which defaults to false" do
    expect(task.completed).to eq false
    task.completed = true
    expect(task.completed).to eq true
  end

  it "has many prerequisites" do
    task2 = Task.create(name: "Do this first")
    task.prerequisites << task2
    expect(task.prerequisites).to match [task2] 
  end

  describe "#complete" do
    it "marks a task as completed" do
      expect(task.completed).to eq false
      task.complete
      # hi there
      expect(task.completed).to eq true
    end
  end
  
end

