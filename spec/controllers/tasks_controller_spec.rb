require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  
  let(:task) { Task.create(name: "Do a thing") }
  
  it "returns a json object for a task" do
    name = task.name
    get :index
    returned_json = response.body
    parsed_json = JSON.parse(returned_json)
    expect(parsed_json[0]['name']).to eq name
  end

end
