import React from 'react';
import { connect } from 'react-redux';
import { signup } from "../actions/session_actions"; 
import SignupForm from './signup_form';
import { modalClose } from '../actions/modal_actions';

const mSTP = (state) => ({
    user: {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    },
    errors: Object.values(state.errors.session),
    formType: 'signup'
})

const mDTP = dispatch => ({
    signUpForm: (user) => dispatch(signup(user)),
     otherForm: (
        <button onClick={() => dispatch(modalOpen('signup'))}>
            Signup
        </button>
    ),
    modalClose: () => dispatch(modalClose())
})

export default connect( mSTP, mDTP)(SignupForm)

