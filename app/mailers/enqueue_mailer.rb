class EnqueueMailer < ActionMailer::Base
  default from: "admin@noq.com"

   def wait_confirmation_email(user)
    @user = user
    mail(:to => @user.email_address, :subject => "Welcome to the Party!")
  end
end
