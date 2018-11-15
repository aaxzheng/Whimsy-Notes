class CreateTagNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :tag_notes do |t|
      t.integer :note_id, null:false
      t.integer :tag_id, null:false
      t.timestamps
    end
    add_index :tag_notes, :tag_id
    add_index :tag_notes, :note_id

  end
end
