import  React  from "react";
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
 
class LoginForm extends React.Component {
    constructor(props) {
      super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field){ //this keeps the state updated for every keystroke
        return (e)=> (
            this.setState(
                { [field]: e.currentTarget.value }
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
          {this.props.errors.map((error, x) => (
            <li key={`error-${x}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }

    render(){
      
      return(
        <div className="login-form-container">
        <form onSubmit={this.handleSubmit}
            className="login-form-box">
          <h3>Log in</h3>
          <br/>
            <div onClick={this.props.modalClose} 
            className="close-x">X</div>
          <label>
          <input
          type="text"
          onChange={this.handleChange('email')}
          value={this.state.email}
          placeholder="Email"
          />
          </label>
          <label>
          <input
          type="text"
          onChange={this.handleChange('password')}
          value={this.state.password}
          placeholder="Password"
          />
          </label>
          <div>
            {this.showErrors()}
          </div>
          <button
          className="login-form-main-login-button"
          type="submit"
          value='login'
          >Login
          </button>
            {this.props.otherForm}
            {/* Link to other switch to signup form */}
        
        </form>
        </div >
      )
    };  
}
export default withRouter(LoginForm);