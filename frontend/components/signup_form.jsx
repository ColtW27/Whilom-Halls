import  React  from "react";
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user;
        this.handleChange = this.handleChange.bind(this);
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
        this.props.signUpForm(user).then(this.props.modalClose)
    }
    showErrors() {
        return (
            <ul>
                {this.props.errors.map((error, x) => (
                    <li key={`error-${x}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
       
        return (
          <div className="signup-form-container"
          >
            <form onSubmit={this.handleSubmit}
                className="signup-form-box">
                <h3>Sign up</h3>
                    <br />
                    <div onClick={this.props.modalClose}
                        className="close-x">X</div>
                <label 
                  >
                    <input
                        type="text"
                        onChange={this.handleChange('first_name')}
                        value={this.state.first_name}
                        placeholder="First Name"
                        className="signup-input cnt-bot"
                    />
                </label>
                    <label className="text-between"
                     >
                    <input
                        type="text"
                        onChange={this.handleChange('last_name')}
                        value={this.state.last_name}
                        placeholder="Last Name"
                        className="signup-input cnt-bot"
                    />Make sure it matches your god-given birthname.
                </label>
                <label
                className="text-between"
                >
                    <input type="date"
                    placeholder="Birth Date"
                    className="signup-input"
                    />You must be at least 18, or able to touch the high ceilings to join.
                </label>
                <label
                 className="text-between"
                 >
                <input
                    type="text"
                    onChange={this.handleChange('email')}
                    value={this.state.email}
                    placeholder="Email"
                    className="signup-input"
                />We will send you trip updates and payment confirmation. 
                </label>
                <label
                 className="text-mid"
                 >
                <input
                    type="password"
                    onChange={this.handleChange('password')}
                    value={this.state.password}
                    placeholder="Password"
                    className="signup-input"
                />
                    <p>We’ll send you torches, quils, inspiration, and powdered wigs via carrier pigeon.</p>
                        <div>
                            {this.showErrors()}
                        </div>
                    <label
                    className="text-below signup-check-box"
                     >
                         <br/>
                        <input type="checkbox"
                        className="tc-checkbox"
                        />I do not want to receive marketing messages from Whilom Halls. I can also opt out of receiving these at any time via message in a bottle.
                    </label>
                    <br/>
                    <br/>
                    <p
                    className="text-below"
                    >By selecting Agree and continue below, I agree to Whilom Hall’s Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.</p>
                </label>
                <button
                    type="submit"
                    value='signup'
                    className="signup-form-main-signup-button"
                >Agree and continue
                </button>
                {/* {this.props.otherForm}  */}
                {/* Link to other switch to login form */}
            </form>
          </div>
        )
    };
}
export default withRouter(SignupForm);