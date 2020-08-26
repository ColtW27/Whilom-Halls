import  React  from "react";
import { withRouter } from 'react-router-dom';
 
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
      // this.state = { user: this.props.user, errors: this.props.errors };
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleChange(field){ //this keeps the state updated for every keystroke
    // field = {...this.state.field}
    return (e)=> (  
      this.setState(
          { [field]: e.currentTarget.value } 
          // { user: {[field]: e.currentTarget.value } }
      )
    )
  };
  handleDemoLogin(e) {
    e.preventDefault();
    const user = {
      email: 'linziemirth31@user.com',
      password: '123456'
    }
    this.props.loginForm(user).then(this.props.modalClose)
  }

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
        <form className="login-form-box"
          onSubmit={this.handleSubmit}
        >
          <div className="inside-form-div-login">
            <h3 className="log-in-label">Log in</h3>
            <br/>
            <div className="login-close-x"
              onClick={this.props.modalClose}>✕
            </div>
            <div className="field">
              <label>
                <input className="floating-label login-form-box top"
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
            <div className="login-form-errors">
              {this.showErrors()}
            </div>
            <button className="login-form-main-login-button"
              type="submit"
              value='login'
            >Log in
            </button>
          
            <br/>
              {/* <Link 
              to="/" 
              className="base-link">Forgot Password?</Link> */}
            <br/>
            <br/>
            <a className="base-link"
              onClick={this.handleDemoLogin}
            >Demo User Login
            </a>
            <br/>
            <br/>
            <label className ="base-word">
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