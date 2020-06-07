class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :name, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :size, null: false
      t.integer :bedrooms, null: false
      t.integer :bathrooms, null: false
      t.integer :pricing, null: false
      t.text :description, null: false
      t.integer :max_num_guests, null: false 
      t.timestamps
    end
     add_index :listings, :name, unique: true
  end
end