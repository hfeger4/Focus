class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.string :body
      t.integer :user_id

      t.timestamps
    end
  end
end
