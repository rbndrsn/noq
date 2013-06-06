class ApplicationController < ActionController::Base
  protect_from_forgery

   private

  # fancy or statement
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  # this helper allows current_user to be seen from the view
  helper_method :current_user
  
  def authorize
    redirect_to log_in_url, alert: "Please log in." if current_user.nil?
  end
end



