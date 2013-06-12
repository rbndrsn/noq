class HomeController < ApplicationController
  def index
    unless session[:user_id]
      redirect_to login_path
    end

    gon.current_user = @user #current_user
    
  end

  def signup
    @load_ember = falsei
    @user = User.new
  end

  def create_user
    @user = User.new params[:user]
    
    if @user.save
      redirect_to root_url
    else
      redirect_to root_url
    end
  end

# data from ember app

  def enqueue
    puts params[:mobile]
    
    # Set up Twilio client
    @client = Twilio::REST::Client.new(ENV['TWILIO_SID'], ENV['TWILIO_AUTH'])

    # Attempt to send message
    begin
      @message = @client.account.sms.messages.create({
        :from => ENV['TWILIO_NUM'],
        :to => params[:mobile],
        :body => params[:name]
      })
    rescue Exception => e
      # Failed!
      puts e
      return false
    end

    render :json => params
  end
  
end

