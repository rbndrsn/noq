class User < ActiveRecord::Base
  require 'bcrypt'
  
  has_secure_password

  attr_accessible :email_address, :first_name, :last_name, :name, :password, :password_confirmation

  validates :email_address, :first_name, :last_name, :presence => true
  
  validates :email_address, :uniqueness => { :case_sensitive => false }
  validates :password, :password_confirmation, :confirmation => true
  
  def name
    [self.first_name, self.last_name].compact.join(' ')
  end
  
  private
  
  def downcase_email
    self.email_address.downcase!
  end
end




