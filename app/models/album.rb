class Album < ApplicationRecord
  validates :title, :user, presence: true

  belongs_to :user
  has_many :photos, dependent: :destroy
end
