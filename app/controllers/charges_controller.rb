class ChargesController < ApplicationController

	def new
	end

	def create
		#In Cents
		@amount = 500
		# customer = StripeTax.create_customer(
		customer = Stripe::Customer.create(
			:email => params[:stripeEmail],
			:card => params[:stripeToken]
		)

		charge = Stripe::Charge.create(
			:customer => customer.id,
			:amount => @amount,
			# :amount => self.calculate(),
			:description => 'Pat Product',
			:currency => 'usd'
		)

	rescue Stripe::CardError => e
		flash[:error] = e.message
		redirect_to charges_path
	end


end
