class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :journals
  has_many :prescriptions
  validates :first_name, presence: true
  validates :last_name, presence: true
end
