class Notebook < ApplicationRecord
  validates :title, presence:true
  belongs_to :user
  has_many :notes, dependent: :destroy
end
