class Api::UsersController < ApplicationController

  def create 
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to api_user_url(@user)
    else
      render json: @user.errors.full_messages, status: 422
      #  render json: [ "Invalid Credentials"], status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private

  def user_params 
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
