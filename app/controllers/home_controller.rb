class HomeController < ApplicationController
  def index
    unless session[:user_id]
      redirect_to login_path
    end
  end

  def signup

# don't load ember app
    @load_ember = false
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

# data from ember, send sms and email

  def enqueue

    EnqueueMailer.wait_confirmation_email(params[:name], params[:email]).deliver
    
    # Set up Twilio client
    @client = Twilio::REST::Client.new(ENV['TWILIO_SID'], ENV['TWILIO_AUTH'])

    # Attempt to send message
    begin
      @message = @client.account.sms.messages.create({
        :from => ENV['TWILIO_NUM'],
        :to => params[:mobile],
        :body =>  "Welcome to the party #{params[:name]}! We look forward to seeing you again in 25 minutes."
      })

    rescue Exception => e
      # Failed!
      puts e
      return false
    end

    render :json => params
  end
  
end

