class HomeController < ApplicationController
  def index
    unless session[:user_id]
      redirect_to login_path
    end

    gon.current_user = @user #current_user
    
  end

  def signup
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

# data from ember app

  def enqueue
    puts params

    render :json => params
  end
  
end

