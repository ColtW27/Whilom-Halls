import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listings_actions'

export default (state ={}, action ) => {
    Object.freeze(state)

    switch (action.type) {
        case RECEIVE_LISTINGS:
            return action.listings
        case RECEIVE_LISTING:
            let nextState = Object.assign({}, state, action.listingId);
            return nextState;
        default:
            return state;
    }
}