import { connect } from 'react-redux';
import { signup } from "../actions/session_actions"; 
import SignupForm from './signup_form';


const mSTP = (state) => ({
    user: {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    },
    errors: Object.values(state.errors),
    formType: 'signup'
})

const mDTP = dispatch => ({
    signUpForm: (user) => dispatch(signup(user)),
     otherForm: (
        <button onClick={() => dispatch(modelOpen('signup'))}>
            Signup
        </button>
    ),
    modalClose: () => dispatch(modalClose())
})

export default connect( mSTP, mDTP)(SignupForm)

