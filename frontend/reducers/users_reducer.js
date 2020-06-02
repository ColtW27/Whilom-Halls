import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // debugger
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser }) //[1] of current user
        // return { id: action.currentUser[1].id}
        default:
            return state;
    }
}
