class ChangePhotoCaptionToText < ActiveRecord::Migration
  def self.up
    change_column :photos, :caption_text, :text
  end
 
  def self.down
    change_column :photos, :caption_text, :string
  end
end
