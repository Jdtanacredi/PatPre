require 'mailchimp'

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
 
	before_filter :setup_mcapi
 
	def setup_mcapi
	  @mc = Mailchimp::API.new(ENV['MAILCHIMP_KEY'])
	  @list_id = ENV['MAILCHIMP_LIST']
	end

end
