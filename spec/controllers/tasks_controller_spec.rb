require 'rails_helper'

describe TasksController, type: :controller do
  let(:task1) { Task.create(name: "Do a thing", description:"Or don't, I don't care.") }
  let(:task2) { Task.create(name: "Do this first", description:"Or don't, I don't care.") }
  let(:task3) { Task.create(name: "Do this second", description:"Or don't, I don't care.") }

  before :each do
    get :show, params: {id: task1.id}
    @json = JSON.parse(response.body)
  end

  describe "GET /tasks/:id" do    
    it "returns a json object for a task" do
      expect(@json['name']).to eq task1.name
    end
  
    it "includes completeness of a task" do
      expect(@json['completed']).to eq false
    end
  
    it "shows a change in completeness of a task" do
      task1.complete!
      task1.save
      get :show, params: {id: task1.id}
      json = JSON.parse(response.body)
      expect(json['completed']).to eq true
    end
  
    it "shows whether a task is completable" do
      expect(@json['completable']).to eq true
    end  
  
    it "includes the prereq_ids" do
      task1.prerequisites << task2
      task1.prerequisites << task3
      ids = [task2.id, task3.id]
      get :show, params: {id: task1.id}
      json = JSON.parse(response.body)
      # binding.pry
      # expect(json['prereq_ids']).to match ids
      expect(json['prerequisite_ids']).to match ids
    end
  end
  
  describe "POST /tasks" do
    before :each do
      task1.prerequisites << task2
      task1.prerequisites << task3

      @task_attr = { 
        name: task1.name, 
        description: task1.description, 
        prerequisite_ids: task1.prereq_ids, 
        completed: task1.completed, 
        completable: task1.completable? 
      }
    end
    
    it "creates a tasks with given params" do
      post :create, params: {task: @task_attr}
      json = JSON.parse(response.body)
      expect(json['name']).to eq task1.name.to_s
      expect(json['description']).to eq task1.description.to_s
      expect(json['completed']).to eq task1.completed.to_s
      expect(json['completable']).to eq task1.completable?.to_s
      expect(json['prerequisite_ids']).to eq task1.prerequisite_ids.map {|p| p.to_s}
    end
  end
end
