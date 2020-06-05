import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser,
    };
};
 const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
};
 const receiveSessionErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const signup = (user) => (dispatch) => SessionAPIUtil.signup(user)
    .then(Currentuser => dispatch(receiveCurrentUser(Currentuser)),
        error => dispatch(receiveSessionErrors(error.responseJSON)));

export const login = (user) => {
    return (dispatch) => SessionAPIUtil.login(user)
        .then(currentUser => dispatch(receiveCurrentUser(currentUser)), 
            error => dispatch(receiveSessionErrors(error.responseJSON)));
}
export const logout = () => {
    return (dispatch) => SessionAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()));
}