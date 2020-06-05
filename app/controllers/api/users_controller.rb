class Api::UsersController < ApplicationController

<<<<<<< HEAD
  def create
=======
  def create 
>>>>>>> auth
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to api_user_url(@user)
    else
<<<<<<< HEAD
      render json: @user.errors.full_messages
=======
      render json: @user.errors.full_messages, status: 422
>>>>>>> auth
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private

  def user_params 
<<<<<<< HEAD
    params.require(:user).permit(:username, :password)
  end
  
end


=======
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end
end
>>>>>>> auth
