import { MODAL_CLOSE, MODAL_OPEN } from "../actions/modal_actions";


const modalReducer = (state = null, action ) => {
    Object.freeze(state)
    switch (action.type) {
        case MODAL_OPEN:
            return action.modal//sets our modal slice to a string
        case MODAL_CLOSE: 
           return null //resets our modal slice to null
        default:
            return state;
    }
}

export default modalReducer;