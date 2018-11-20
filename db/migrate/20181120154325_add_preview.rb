class AddPreview < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :preview, :string
  end
end
