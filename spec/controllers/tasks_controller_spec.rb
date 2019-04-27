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
  
    # it "shows whether a task is completable" do
    #   expect(@json['completable']).to eq true
    # end  
  
    it "includes the prerequisite_ids" do
      task1.prerequisites << task2
      task1.prerequisites << task3
      ids = [task2.id, task3.id]
      get :show, params: {id: task1.id}
      json = JSON.parse(response.body)
      expect(json['prerequisite_ids']).to match ids
    end
  end

  describe "POST /tasks/:id" do
    before :each do
      task1.prerequisites << task2
      task1.prerequisites << task3

      @task_attr = { 
        name: task1.name, 
        description: task1.description, 
        prerequisite_ids: task1.prerequisite_ids, 
        completed: task1.completed, 
      }
    end
    
    it "creates a tasks with given params" do
      expect{post :create, params: {task: @task_attr}}.to change{Task.count}.by 1
      task = Task.last
      # binding.pry
      expect(task.name).to eq task1.name
      expect(task.description).to eq task1.description
      expect(task.completed).to eq task1.completed
      expect(task.prerequisite_ids).to eq task1.prerequisite_ids
    end

    it "returns the correct json for the new task" do
      post :create, params: {task: @task_attr}
      json = JSON.parse(response.body)
      expect(json['name']).to eq task1.name
      expect(json['description']).to eq task1.description
      expect(json['completed']).to eq task1.completed
      expect(json['prerequisite_ids']).to eq task1.prerequisite_ids
    end
  end

  describe "PUT /tasks" do
    before :each do
      task1.prerequisites << task2
      task1.prerequisites << task3

      @new_task_attr = { 
        name: "Edited name",
        description: "Edited description", 
        prerequisite_ids: [task2.id], 
        completed: true, 
      }
    end
    
    it "edits a task" do
      put :update, params: {id: task1.id, task: @new_task_attr}
      task = Task.find(task1.id)
      expect(task.name).to eq @new_task_attr[:name]
      expect(task.description).to eq @new_task_attr[:description]
      expect(task.prerequisite_ids).to eq @new_task_attr[:prerequisite_ids]
      expect(task.completed).to eq @new_task_attr[:completed]
    end

    it "returns the correct json for the updated task" do
      put :update, params: {id: task1.id, task: @new_task_attr}
      json = JSON.parse(response.body)
      expect(json['name']).to eq @new_task_attr[:name]
      expect(json['description']).to eq @new_task_attr[:description]
      expect(json['completed']).to eq @new_task_attr[:completed]
      expect(json['prerequisite_ids']).to eq @new_task_attr[:prerequisite_ids]
    end

    it "can just mark a task as complete" do
      expect(Task.find(task1.id).completed).to eq false
      # binding.pry
      put :update, params: {id: task1.id, task: {completed: true}}
      # binding.pry
      expect(Task.find(task1.id).completed).to eq true
    end

    it "can just add a prerequisite to a task" do
      put :update, params: {id: task1.id, task: @new_task_attr}
      expect(Task.find(task1.id).prerequisites.count).to eq 1
      put :update, params: {id: task1.id, task: {prerequisite_ids: [task2.id, task3.id]}}
      expect(Task.find(task1.id).prerequisites.count).to eq 2
    end
    
  end

  describe "DELETE task/:id" do
    it "deletes the task" do
      expect{delete :destroy, params: {id: task1.id}}.to change{Task.count}.by -1
    end
  end

end
