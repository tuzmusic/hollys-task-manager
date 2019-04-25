require 'rails_helper'


RSpec.describe Task, type: :model do
  # let(:task) { Task.create(name: "Do a thing") }

  it "has a name" do
    expect(Task).to respond_to(:name)  
  end

  it "has many prerequisites" do
    task = Task.create(name: "Do a thing")
    task2 = Task.create(name: "Do this first")
    # binding.pry
    task.prerequisites << task2
    expect(task.prerequisites).to match [task2] 
  end

end
