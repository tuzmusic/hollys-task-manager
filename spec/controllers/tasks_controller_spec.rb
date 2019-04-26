require 'rails_helper'

describe TasksController, type: :controller do
  
  let(:task) { Task.create(name: "Do a thing") }
  
  it "returns a json object for a task" do
    get :show, params: {id: task.id}
    name = task.name
    parsed_json = JSON.parse(response.body)
    expect(parsed_json['name']).to eq name
  end

  it "includes completeness of a task" do
    get :show, params: {id: task.id}
    json1 = JSON.parse(response.body)
    expect(json1['completed']).to eq false
  end

  it "shows a change in completeness of a task" do
    task.complete!
    task.save
    get :show, params: {id: task.id}
    json = JSON.parse(response.body)
    expect(json['completed']).to eq true
  end

  it "shows whether a task is completable" do
    get :show, params: {id: task.id}
    json = JSON.parse(response.body)
    expect(json['completable']).to eq true
  end

  let(:task2) { Task.create(name: "Do this first") }
  let(:task3) { Task.create(name: "Do this second") }


  it "includes the prereq_ids" do
    task.prerequisites << task2
    task.prerequisites << task3
    ids = [task2.id, task3.id]
    get :show, params: {id: task.id}
    json = JSON.parse(response.body)
    expect(json['prereq_ids']).to match ids
  end

end
