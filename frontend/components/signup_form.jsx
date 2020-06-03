import { React } from "react";
import { Link } from 'react-router-dom'

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) { //this keeps the state updated for every keystroke
        return (e) => (
            this.setState(
                { [field]: e.currentTarget.value }
            )
        )
    };

    handleSubmit(e) { //calls dispatch with signup function w/ the current user state, then closes modal.
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.signUpForm(user).then(this.props.closeModal)
    }

    render() {
       
        return (
          <div className="session-form-container">
            <form onSubmit={this.handleSubmit}
                className="session-form-box">
                <h3>Sign up</h3>
                <label >First Name
                    <input
                        type="text"
                        onChange={this.handleChange('firstName')}
                        value={this.state.firstName}
                    />
                </label>
                <label >Last Name
                    <input
                        type="text"
                        onChange={this.handleChange('LastName')}
                        value={this.state.LastName}
                    />Make sure it matches your god-given birthname.
                </label>
                <label>Birth Date 
                    <input type="text"
                    />You must be at least 18, or able to touch the high ceilings to join.
                </label>
                <label>Email
                <input
                    type="text"
                    onChange={this.handleChange('email')}
                    value={this.state.email}
                />We will send you trip updates and payment confirmation. 
                </label>
                <label>Password
                <input
                    type="password"
                    onChange={this.handleChange('password')}
                    value={this.state.password}
                />
                    <p>We’ll send you torches, quils, inspiration, and powdered wigs via carrier pigeon.</p>
                    <label>
                        <input type="checkbox"/>I do not want to receive marketing messages from Whilom Halls. I can also opt out of receiving these at any time via message in a bottle.
                    </label>
                    <p>By selecting Agree and continue below, I agree to Whilom Hall’s Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.</p>
                </label>
                <button
                    type="submit"
                    value='Sign up'
                >Agree and continue
                </button>

                {/* <Link to={}></Link> add a link to login here */}
            </form>
          </div>
        )
    };
}
export default SignupForm;