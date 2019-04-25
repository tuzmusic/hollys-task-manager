class PrerequisiteTask < ApplicationRecord
  belongs_to :do_first, class_name: :Task
  belongs_to :do_second, class_name: :Task
end
