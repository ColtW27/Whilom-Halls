import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const FETCH_LISTINGS = 'FETCH_LISTINGS';

export const receiveListings = (listings) => ({
    type: RECEIVE_LISTINGS,
    listings
});

export const fetchListings = () => (dispatch) => ListingAPIUtil.fetchListings().then(listings => dispatch(receiveListings(listings)));
   
