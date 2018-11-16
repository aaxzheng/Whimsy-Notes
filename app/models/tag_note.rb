class TagNote < ApplicationRecord
  belongs_to :note
  belongs_to :tag, inverse_of: :tag_notes
end
