class HomeController < ApplicationController
  def index
    gon.current_user = 7 #current_user

    
  end

  def signup
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
  
end

