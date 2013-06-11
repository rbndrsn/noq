class UsersController < ApplicationController
  

  def create
    @user = User.new params[:user]
    
    if @user.save
      redirect_to root_url
    else
      render 'home/signup'
    end
  end

  def reset_password

  end

  def deliver_password
    @user = User.find_by_email_address(params[:email_address])
    
    if @user && @user.new_password
      redirect_to login_path, flash: { message: "Password reset" } 
    else 
      render 'deliver_password', flash: { error: "User does not exist" }
    end

  end

end

