import React from 'react';
import { Link } from 'react-router-dom'

class HostContainer extends React.Component {
    render() {
        return (
            <div>
                <h6>Host</h6>
                <ul>
                    <li><Link to="/">Host your Home</Link></li>
                    <li><Link to="/">Host an Escapade</Link></li>
                    <li><Link to="/">Sustainable Hosting</Link></li>
                    <li><Link to="/">Tours & Walk Throughs</Link></li>
                    <li><Link to="/">Resources</Link></li>
                </ul>
            </div>
        )
    }
};
export default HostContainer;