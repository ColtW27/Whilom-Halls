import { React } from "react";
import { Link } from 'react-router-dom'
 
class LoginForm extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
            username: "",
            password: "",
            email: ""
        };
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
        this.props.loginForm(user).then(this.props.closeModal)
    }

    render(){
      
      return(
        <div className="session-form-container">
        <form onSubmit={this.handleSubmit}
            className="session-form-box">
          <h3>Log in</h3>
          <br/>
            <div onClick={this.props.modalClose} 
            className="close-x">X</div>
          <input
          type="text"
          onChange={this.handleChange('email')}
          value={this.state.email}
          />
          <input
          type="text"
          onChange={this.handleChange('password')}
          value={this.state.password}
          />
          <button
          type="submit"
          value={formtype}
          >{formType}
          </button>

          {/* <Link to={}></Link> add a link to signup here */}
        </form>
        </div >
      )
    };  
}
export default LoginForm;