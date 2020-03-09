class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # protect_from_forgery except: :search #対策コードを追加
  before_action :authenticate_user!
  before_action :configure_permitted_parameters,if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up,keys: [:name])
  end
end
