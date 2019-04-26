class TaskSerializer < ActiveModel::Serializer
  attributes  :id, :name, :description, :completed, :prerequisite_ids

  def completable
    object.completable?
  end

end
