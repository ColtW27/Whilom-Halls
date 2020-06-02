import { connect } from 'react-redux';
import { login } from "../actions/session_actions";
import LoginForm from './login_form';

 
const mSTP = (state, ownProps) => ({
    errors: Object.values(state.errors.session),
    formType: 'login'
})

const mDTP = dispatch => ({
    processForm: (user)=> dispatch(login(user))

})

export default connect(mSTP, mDTP)(LoginForm)