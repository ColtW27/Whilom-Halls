import  React  from "react";
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
 
class LoginForm extends React.Component {
    constructor(props) {
      super(props);
        // this.state = { user: this.props.user, errors: this.props.errors };
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field){ //this keeps the state updated for every keystroke
        return (e)=> (
            this.setState(
                { [field]: e.currentTarget.value } 
                // { user: {[field]: e.currentTarget.value } }
            )
        )
    };

    handleSubmit(e) { //calls dispatch with login function w/ the current user state, then closes modal.
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.loginForm(user).then(this.props.modalClose)
    }
    showErrors() {
      return (
        <ul>
          {this.props.errors.map((error, idx) => (
            <li key={`error-${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
    // renderErrors() {
    //   return (
    //       { errors: this.props.errors }
    //     )
    // }

    render(){
      
      return(
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit}
            className="login-form-box">
          <div className="inside-form-div-login">
            <h3 className="log-in-label">Log in</h3>
            <br/>
              <div onClick={this.props.modalClose} 
              className="login-close-x">✕</div>
            <div className="field">
              <label>
              <input
              className="floating-label"
              className="login-form-box top"
              type="text"
              onChange={this.handleChange('email')}
              value={this.state.email}
              placeholder="Email"
              />
              </label>
            </div>


             
            <div className="field">
              <label>
              <input
              // className="floating-label"
              className="login-form-box bottom"
              type="password"
              onChange={this.handleChange('password')}
              value={this.state.password}
              placeholder="Password"
              />
              </label>
            </div>
            <div 
            className="login-form-errors">
              {this.showErrors()}
           
              {/* {this.state.user.email} */}
              
            
            </div>
            <button
            className="login-form-main-login-button"
            type="submit"
            value='login'
            >Log in
            </button>
         
            <br/>
              <Link 
              to="/" 
              className="base-link">Forgot Password?</Link>
            <br/>
            <br/>
              <Link
               to="/"
               className="base-link">More login options</Link>
            <br/>
            <br/>
            <label 
            className ="base-word">
              Don't have an account?
              {this.props.otherForm}
              {/* Link to other switch to signup form */}
            </label>
          </div>
        </form>
        </div >
      )
    };  
}
export default withRouter(LoginForm);