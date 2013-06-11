class UserMailer < ActionMailer::Base
  default from: "admin@noq.com"

  def password_reset_email(user, password)
    @user = user
    @url  = "http://noq.com/login"
    @password = password
    mail(:to => @user.email_address, :subject => "NoQ Password Reset")
  end
end
