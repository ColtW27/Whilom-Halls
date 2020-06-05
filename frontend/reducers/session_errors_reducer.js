import {
    RECEIVE_SESSION_ERRORS,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import { MODAL_CLOSE } from '../actions/modal_actions';

const SessionErrorsReducer = (errors = [], action) => {

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case MODAL_CLOSE:
            return [];
        default:
            return errors;
    }
}

export default SessionErrorsReducer;