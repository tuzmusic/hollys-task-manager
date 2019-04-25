class Task < ApplicationRecord
  has_many :prerequisite_tasks, foreign_key: :do_second_id  
  has_many :prerequisites, through: :prerequisite_tasks, source: :do_first

  def complete
    self.completed = true
  end

  def uncomplete
    self.completed = false
  end

  def complete?
    self.complete
  end

  def incomplete?
    !self.complete
  end

  def completable?
    self.prerequisites.all? { |t| t.complete? }
  end

end
