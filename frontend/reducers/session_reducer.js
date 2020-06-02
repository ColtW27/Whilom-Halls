import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const _nullSession = {
    id: null
};

export default (state = _nullSession, action) => {
    // debugger
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            // return Object.assign({}, { id: action.user.id });
            return { id: action.currentUser.id } //[1] of current user
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};