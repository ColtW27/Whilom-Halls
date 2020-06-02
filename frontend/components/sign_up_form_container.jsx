import { connect } from 'react-redux';
import { signup } from "../actions/session_actions"; 
import SignupForm from './signup_form';


const mSTP = (state) => ({
    errors: Object.values(state.errors),
    formType: 'signup'
})

const mDTP = dispatch => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect( mSTP, mDTP)(SignupForm)

