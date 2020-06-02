import { React } from "react";
import { Link } from 'react-router-dom'

class SessionForm extends React.Component {
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

    handleSubmit(e) { //calls dispatch with whichever function in sttached to the processForm prop, w/ the current user state.
        e.preventDefault();
        this.props.processForm(this.state)
    }

    render(){
        const {formType} = this.props
        return(
        <form onSubmit={this.handleSubmit}>
          <h3>{formType}</h3>
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

          {/* <Link to={}></Link> add a link to either login or signup here */}
        </form>
      )
    };  
}
export default SessionForm;