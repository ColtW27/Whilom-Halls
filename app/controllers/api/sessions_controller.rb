class Api::SessionsController < ApplicationController
<<<<<<< HEAD
       def create
        # debugger
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user && login!(@user)
          redirect_to api_user_url(@user)
        else
            render json: {status: "error", code: 422, message: "Invalid Credentials"}
=======
    def create
        
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user && login!(@user)
          redirect_to api_user_url(@user)
        else
            render json: [ "Invalid Credentials"], status: 422
>>>>>>> auth
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
           render json: {status: "error", code: 404, message: "No user currently logged in."}
        end
        
    end
end
