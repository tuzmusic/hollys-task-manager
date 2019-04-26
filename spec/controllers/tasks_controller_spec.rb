require 'rails_helper'

describe TasksController, type: :controller do
  let(:task1) { Task.create(name: "Do a thing") }
  let(:task2) { Task.create(name: "Do this first") }
  let(:task3) { Task.create(name: "Do this second") }

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
      expect(json['prereq_ids']).to match ids
    end
  end
  
  describe "POST /tasks" do
    before :each do
      task_attr = { name: task1.name, description: task1.description, prereq_ids: task1.prereq_ids, completed: task1.completed, completable: task1.completable? }
      post :create, task: task_attr
    end

    it "creates a tasks with given params" do
      @json = JSON.parse(response.body)
      expect(body['name']).to eq task1.name
      expect(body['description']).to eq task1.description
      expect(body['prereq_ids']).to eq task1.prereq_ids
      expect(body['completed']).to eq task1.completed
      expect(body['completable']).to eq task1.completable?
    end
  end
end
