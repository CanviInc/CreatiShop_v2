
# This is needed for using sendgrid on heroku
ENV['SENDGRID_USERNAME'] = "jai.n@cisinlabs.com"
ENV['SENDGRID_PASSWORD'] = "download123"
# ActionMailer::Base.mailer_sender = "no-reply@gmail.com"
ActionMailer::Base.smtp_settings = {
  :address        => 'smtp.sendgrid.net',
  :port           => '587',
  :authentication => :plain,
  :user_name      => ENV['SENDGRID_USERNAME'],
  :password       => ENV['SENDGRID_PASSWORD'],
  :domain         => 'heroku.com'
}
ActionMailer::Base.delivery_method ||= :smtp
