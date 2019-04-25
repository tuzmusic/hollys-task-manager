require 'rails_helper'

describe Task, type: :model do
  let(:task1) { Task.create(name: "Do this LAST") }
  let(:task2) { Task.create(name: "Do this first") }
  let(:task3) { Task.create(name: "Do this second") }

  it "has a name" do
    expect(Task).to respond_to(:name)  
  end

  it "has a 'completed' field, which defaults to false" do
    expect(task1.completed).to eq false
    task1.completed = true
    expect(task1.completed).to eq true
  end

  it "has many prerequisites" do
    task1.prerequisites << task2
    expect(task1.prerequisites).to match [task2] 
  end

  describe "#complete" do
    it "marks a task as completed" do
      expect(task1.completed).to eq false
      task1.complete
      expect(task1.completed).to eq true
    end

    it "raises an error if a task is not completable" do
      task1.prerequisites << task2
      task1.prerequisites << task3
      task2.update(completed: false)
      task3.update(completed: false)
      expect(task1.completable?).to eq false 
      expect{task1.complete}.to raise_error StandardError
    end
  end

  describe "#uncomplete" do
    it "marks a completed task as not completed" do
      expect(task1.completed).to eq false
      task1.complete
      expect(task1.completed).to eq true
      task1.uncomplete
      expect(task1.completed).to eq false
    end
  end

  describe "#complete?" do
    it "is an alternate getter for completeness" do
      expect(task1.complete?).to eq task1.completed
    end
  end
  
  describe "#completable?" do
    it "returns false if any prerequisites are incomplete" do
      task1.prerequisites << task2
      task1.prerequisites << task3
      task2.update(completed: false)
      task3.update(completed: false)
      expect(task1.completable?).to eq false 
    end

    it "returns true if all prerequisites are complete" do
      task1.prerequisites << task2
      task1.prerequisites << task3
      task2.update(completed: true)
      task3.update(completed: true)
      expect(task1.completable?).to eq true
    end
  end
  
end

