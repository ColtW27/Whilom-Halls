import React from 'react'; 
import { connect } from 'react-redux';
import { login } from "../actions/session_actions";
import LoginForm from './login_form';
import { modalClose } from '../actions/modal_actions';

 
const mSTP = (state, ownProps) => ({
    user: {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    },
    errors: Object.values(state.errors.session),
    formType: 'login'
})

const mDTP = dispatch => ({
    loginForm: (user)=> dispatch(login(user)),
    otherForm: (
        <button onClick={ () => dispatch(Open('signup'))}>
            Signup
        </button>
    ),
    modalClose: () => dispatch(modalClose())
});

export default connect(mSTP, mDTP)(LoginForm)