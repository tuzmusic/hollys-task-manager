class TaskSerializer < ActiveModel::Serializer
  attributes  :id, :name, :description, :completed, :completable, :prerequisite_ids

  def completable
    object.completable?
  end

end
