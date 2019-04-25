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
    task.complete
    task.save
    get :show, params: {id: task.id}
    json2 = JSON.parse(response.body)
    expect(json2['completed']).to eq true
  end

end
