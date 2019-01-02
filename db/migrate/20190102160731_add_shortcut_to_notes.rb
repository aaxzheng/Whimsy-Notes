class AddShortcutToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :favorite,:boolean, default: false
  end
end
