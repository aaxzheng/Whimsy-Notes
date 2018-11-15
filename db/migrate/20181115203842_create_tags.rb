class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :tag, null:false
      t.integer :user_id, null:false
      t.timestamps
    end
    add_index :tags, :user_id
  end
end
