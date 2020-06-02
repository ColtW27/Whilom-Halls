class Api::SessionsController < ApplicationController
    def create
        
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user && login!(@user)
          redirect_to api_user_url(@user)
        else
            render json: {status: "error", code: 422, message: "Invalid Credentials"}
            # render @user.errors.full_messages
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
