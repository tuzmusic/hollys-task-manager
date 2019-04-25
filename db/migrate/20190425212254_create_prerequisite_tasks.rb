class CreatePrerequisiteTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :prerequisite_tasks do |t|
      t.integer :do_first_id
      t.integer :do_second_id

      t.timestamps
    end
  end
end
