class SessionsController < ApplicationController
  
  def new

  end

  def create
    # render "login", layout: false

     @user = User.find_by_email_address(params[:email_address])
    
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      
      redirect_to root_url, notice: "Thank you for logging in!"
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end


end

 

