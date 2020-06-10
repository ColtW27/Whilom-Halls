import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';


export const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
});

export const receiveListing = (listingId) => ({
    type: RECEIVE_LISTING,
    listingId
})

export const fetchListings = () => (dispatch) => ListingAPIUtil.fetchListings().then(listings => dispatch(receiveListings(listings)));
   
export const fetchListing = (listingId) => dispatch => ListingAPIUtil.fetchListing(listingId).then(retListing => dispatch(receiveListing(retListing.id)))