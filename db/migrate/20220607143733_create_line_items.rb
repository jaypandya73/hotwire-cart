class CreateLineItems < ActiveRecord::Migration[6.1]
  def change
    create_table :line_items do |t|
      t.string :name
      t.integer :qty
      t.decimal :price
      t.text :metadata

      t.timestamps
    end
  end
end
