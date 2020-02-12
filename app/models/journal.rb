class Journal < ApplicationRecord
  belongs_to :user
  has_many :entries

  validates :title, presence: true
  validates :body, presence: true
end
