class TaskSerializer < ActiveModel::Serializer
  attributes  :id, :name, :description, :completed, :completable

  def completable
    object.completable?
  end
end
