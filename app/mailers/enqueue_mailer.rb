class EnqueueMailer < ActionMailer::Base
  default from: "admin@noq.com"

   def wait_confirmation_email(name, email)
    @name = name
    mail(:to => email, :subject => "Welcome to the Party!")
  end
end
