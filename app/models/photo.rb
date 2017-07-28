class Photo < ApplicationRecord
  validates :image_url, :user, presence: true
  belongs_to :user
  has_many :comments
  has_many :tags, through: :taggings
  has_many :taggings, dependent: :destroy
end
