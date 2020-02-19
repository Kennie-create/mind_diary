class Prescription < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :description, presence: true
  validates :date, presence: true
  validates :expiration, presence: true
  validates :provider, presence: true
  validates :dosage, presence: true

end
