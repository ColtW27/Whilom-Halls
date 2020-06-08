class Api::SessionsController < ApplicationController
    def create
        # debugger
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        
        if @user && login!(@user)
          redirect_to api_user_url(@user)
        else
            render json: [ "Invalid Credentials"], status: 422
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
