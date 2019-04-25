require 'rails_helper'

RSpec.describe Task, type: :model do
  it "has a name" do
    expect(Task).to respond_to(:name)  
  end
end
