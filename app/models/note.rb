class Note < ApplicationRecord
  belongs_to :user
  belongs_to :notebook

  has_many :note_tags,
  foreign_key: :note_id,
  class_name: :TagNote

  has_many :tags,
  through: :note_tags,
  source: :tag
end
