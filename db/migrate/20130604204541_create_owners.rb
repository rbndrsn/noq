class CreateOwners < ActiveRecord::Migration
  def change
    create_table :owners do |t|
      t.string :email_address
      t.string :first_name
      t.string :last_name
      t.string :password
      t.string :password_confirmation

      t.timestamps
    end
  end
end
