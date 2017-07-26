class Photo < ApplicationRecord
validates :image_url, :user, presence: true
belongs_to :user
has_many :comments
end
