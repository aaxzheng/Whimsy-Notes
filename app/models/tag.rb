class Tag < ApplicationRecord
  validates :tag, presence:true

  belongs_to :user

  has_many :tagged_notes,
  foreign_key: :tag_id,
  class_name: :TagNote

  has_many :notes,
  through: :tagged_notes,
  source: :note
end
