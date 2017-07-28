class Tagging < ApplicationRecord
  validates :tag_id, uniqueness: {scope: :photo_id}
  belongs_to :tag
  belongs_to :photo
end
