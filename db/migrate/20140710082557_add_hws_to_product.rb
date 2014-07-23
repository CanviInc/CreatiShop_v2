class AddHwsToProduct < ActiveRecord::Migration
  def change
    add_column :products, :height, :integer,:default=>10
    add_column :products, :weight, :integer,:default=>10
    add_column :products, :stem, :string,:default=>10
  end
end
