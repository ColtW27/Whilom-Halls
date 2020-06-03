import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


export default (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
     
            const nextState =  Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
            return nextState
        // return { id: action.currentUser.id}
        default:
            return state;
    }
}
