class Product < ActiveRecord::Base
  attr_accessible :count, :description, :name, :price
end
