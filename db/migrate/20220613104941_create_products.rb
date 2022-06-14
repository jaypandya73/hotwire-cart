class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :ndc
      t.decimal :lowest_price
      t.text :metadata

      t.timestamps
    end
  end
end
