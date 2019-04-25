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
    task
    get :show, params: {id: task.id}
    parsed_json = JSON.parse(response.body)
    expect(parsed_json['completed']).to eq false
    task.complete
    task.save
    get :index
    expect(parsed_json['completed']).to eq true
  end

end
