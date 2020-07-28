import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listings_actions'

export default (state = {}, action ) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch (action.type) { 
        case RECEIVE_LISTINGS:
            return action.listings
        case RECEIVE_LISTING:
            // nextState[action.listing.id] = action.listing
            return action.listing
        default:
            return state;
    }
}