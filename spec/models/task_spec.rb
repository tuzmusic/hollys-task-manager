require 'rails_helper'

RSpec.describe Task, type: :model do
  it "has a name" do
    expect(Task).to respond_to(:name)  
  end

  it "has many prerequisites" do
    task2 = Task.create(name: "Do this first")
    task.prerequisites.push task2
    expect(task.prerequisites).to match [task2] 
  end

end
