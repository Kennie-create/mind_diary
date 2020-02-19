class CreatePrescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :prescriptions do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :date, null: false
      t.string :expiration, null: false
      t.string :provider, null: false
      t.string :dosage, null: false
      t.string :refills
      t.string :pharmacy
      t.belongs_to :user, null: false

      t.timestamps null: false
    end
  end
end
