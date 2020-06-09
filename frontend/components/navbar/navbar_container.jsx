import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import NavBar from './navbar';
import { modalOpen } from '../../actions/modal_actions'



const mSTP = state => {
    
    // debugger
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    modalOpen: modal => dispatch(modalOpen(modal))
})

export default connect(mSTP, mDTP)(NavBar)