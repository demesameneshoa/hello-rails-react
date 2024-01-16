class ApiController < ApplicationController
  def random_greeting
    render json: { greeting: Message.order('RANDOM()').first&.message }
  end
end