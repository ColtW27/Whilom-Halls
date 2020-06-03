import { connect } from 'react-redux';
import { login } from "../actions/session_actions";
import LoginForm from './login_form';
import { modelOpen } from '../actions/modal_actions';

 
const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    formType: 'login'
})

const mDTP = dispatch => ({
    loginform: (user)=> dispatch(login(user)),
    otherForm: (
        <button onClick={ () => dispatch(modelOpen('signup'))}>
            Signup
        </button>
    ),
    modalClose: () => dispatch(modalClose())
});

export default connect(mSTP, mDTP)(LoginForm)