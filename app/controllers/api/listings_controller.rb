class Api::ListingsController < ApplicationController

    
    def create
      @listing = Listing.new(listing_params)
        if @listing.save
        
        else
            render json: @listing.errors.full_messages, status: 422
        end
    end

    def index
      @listings = Listing.all
      render :index
    end
 
    def show
      @listing = Listing.with_attached_listing_photo.find(params[:id])
      render :show
    end

    private

    def listing_params
      params.require(:listing).permit(:name, :latitude, :longitude, :size, :bedrooms, :bathrooms, :pricing, :description, :max_num_guests, listing_photos: [])
    end
end