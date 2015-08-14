require 'mailchimp'

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
 
	before_filter :setup_mcapi
 
	def setup_mcapi
	  # @mc = Mailchimp::API.new('API KEY GOES HERE')
	  # @list_id = "LIST ID GOES HERE"
	end

end
