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
      task1.complete!
      expect(task1.completed).to eq true
    end

    it "raises an error if a task is not completable" do
      task1.prerequisites << task2
      task1.prerequisites << task3
      task2.uncomplete!
      task3.uncomplete!
      expect(task1.completable?).to eq false 
      expect{task1.complete}.to raise_error StandardError
    end
  end

  describe "#uncomplete" do
    it "marks a completed task as not completed" do
      expect(task1.completed).to eq false
      task1.complete!
      expect(task1.completed).to eq true
      task1.uncomplete!
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
      task2.uncomplete!
      task3.uncomplete!
      expect(task1.completable?).to eq false 
    end

    it "returns true if all prerequisites are complete" do
      task1.prerequisites << task2
      task1.prerequisites << task3
      task2.complete!
      task3.complete!
      expect(task1.completable?).to eq true
    end

    it "handles 'nested' incompleteness" do
      task1.prerequisites << task2
      task2.prerequisites << task3
      expect(task1.completable?).to eq false 
      task3.complete!
      expect(task1.completable?).to eq false 
      task2.complete!
      expect(task1.completable?).to eq true
    end
  end

  describe "#toggle!" do
    it "marks an incomplete task as complete" do
      task1.toggle!
      expect(task1.complete?).to eq true 
    end

    it "marks a complete task as incomplete" do
      task1.complete!
      task1.toggle!
      expect(task1.complete?).to eq false
    end
  end

  # context "trying to add tasks as prerequisites to each other" do
  #   it "raises an error" do
  #     task1.prerequisites << task2
  #     expect{task2.prerequisites << task1}.to raise_error StandardError
  #   end
  # end

end

