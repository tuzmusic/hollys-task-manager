class TaskSerializer < ActiveModel::Serializer
  attributes :name, :description, :completed, :id
end
