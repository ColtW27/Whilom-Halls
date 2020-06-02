import React from 'react';
import { Link } from 'react-router-dom';
// import { logout } from '../util/session_api_util';
class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        debugger
        this.props.logout()
    }

    render() {

        const currentUser = this.props.currentUser;

        let button;
        let display;
        if (currentUser) {
            // debugger
            display = <h1>Welcome {currentUser[1].username}</h1>;
            button = <button onClick={this.handleLogout}>Logout</button>;

        } else {
            button = <Link to='/signup'>Signup</Link>;
            display = <Link to='/login'>Login</Link>;
        }

        return (
            <div>
                {display}
                {button}
            </div>
        )
    }
}

export default Greeting;