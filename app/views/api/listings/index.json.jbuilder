@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id ,:name,   :latitude, :longitude, :size, :bedrooms,   :bathrooms, :pricing, :description,   :max_num_guests

    json.photoUrls listing.listing_photo.map { |file| url_for(file) }  

    # json.set! photoUrl do
    #   listing.listing_photo.map do |photo|
    #     debugger
    #     url_for(photo)
    #   end
    # end
  end
end

