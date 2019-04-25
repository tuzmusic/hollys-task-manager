class TaskSerializer < ActiveModel::Serializer
  attributes :name, :description, :completed, :id, :completable

  def completable
    object.completable?
  end
end
