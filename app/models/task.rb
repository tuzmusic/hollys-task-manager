class Task < ApplicationRecord
  has_many :prerequisite_tasks, foreign_key: :do_second_id  
  has_many :prerequisites, through: :prerequisite_tasks, source: :do_first

  def self.make(attr)
    task = Task.create attr.except(:prerequisite_ids)
    task.update prerequisite_ids: attr[:prerequisite_ids]
    task
  end
  
  def complete!
    raise StandardError, "This task is not completable" if !self.completable?
    self.completed = true
  end

  def uncomplete!
    self.completed = false
  end

  def complete?
    self.completed
  end

  def incomplete?
    !self.completed
  end

  def completable?
    self.prerequisites.all? { |t| t.complete? }
  end

  def toggle! 
    self.completed = !self.completed
  end
end
