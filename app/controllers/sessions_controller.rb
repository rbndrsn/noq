class SessionsController < ApplicationController

  # login/create session
  def create
    # render "login", layout: false

    @user = User.find_by_email_address(params[:email_address])
    
    if @user && @user.authenticate(params[:password])
      session[:user_id] = @user.id
      
      redirect_to root_url, flash: { notice: "Thank you for signing in!" }
      
    else
      redirect_to login_path, flash: { error: "Password or email incorrect" }
    end
  end

  # logout/destroy session
  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end


end

 

