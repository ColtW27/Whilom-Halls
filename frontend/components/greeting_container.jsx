import React from 'react';
import { logout } from '../actions/session_actions';
import { connect } from 'react-redux';
import Greeting from './greeting';



const mSTP = state => {
    // debugger
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return { logout: () => dispatch(logout()) }
}

export default connect(mSTP, mDTP)(Greeting)