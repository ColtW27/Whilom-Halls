import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { MODAL_CLOSE } from '../actions/modal_actions';

const SessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // debugger
            return action.errors
            // return { errors: action.errors};
        case RECEIVE_CURRENT_USER:
            return [];
        case MODAL_CLOSE:
            return [];
        default:
            return state;
    } 
}

export default SessionErrorsReducer;