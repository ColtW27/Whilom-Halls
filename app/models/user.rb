
class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :email, uniqueness: true
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
 
  has_one_attached :profile_picture

  # def valid_email(str)
  #   email = str.split("@")
  #   alphabet = "abcdefghijklmnopqrstuvwxyz"
    
  #   return false if email.length != 2
    
  #   email[0].each_char do |char|
  #     return false if !alphabet.include?(char)
  #   end
    
  #   return false if email[1].split(".").length != 2
  #   true
  # end
  
  attr_reader :password 
  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    @user = User.find_by(email: email)
    if @user && @user.is_password?(password)
      return @user
    end

    return nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end
  
end
