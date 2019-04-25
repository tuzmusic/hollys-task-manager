class Task < ApplicationRecord
  has_many :prerequisite_tasks, foreign_key: :do_second_id  
  has_many :prerequisites, through: :prerequisite_tasks, source: :do_first

  def complete
    self.completed = true
  end

  def complete?
    self.complete
  end

  def completable?
    self.prerequisites.any? do |t|
      !t.complete
    end
  end

end
