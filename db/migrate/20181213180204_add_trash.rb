class AddTrash < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :trashed,:boolean, default: false
  end
end
