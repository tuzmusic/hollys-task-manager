class TaskSerializer < ActiveModel::Serializer
  attributes  :id, :name, :description, :completed, :completable, :prereq_ids

  def completable
    object.completable?
  end

  def prereq_ids
    object.prereq_ids
  end


end
