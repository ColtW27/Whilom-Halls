@listings.each do |listing|
  json.set! listing.id do
    json.extract! listing, :id ,:name,   :latitude, :longitude, :size, :bedrooms,   :bathrooms, :pricing, :description,   :max_num_guests
    # json.photoUrl url_for(listing.listing_photo)
  end
end

