class Tag < ApplicationRecord
  validates :tag, presence:true

  belongs_to :user

  has_many :tag_notes,
  foreign_key: :tag_id,
  class_name: :TagNote,
  inverse_of: :tag

  has_many :notes,
  through: :tag_notes,
  source: :note
end
