import React from 'react';
import { Link } from 'react-router-dom'

class SupportContainer extends React.Component {
    render() {
        return (
            <div>
                <h6>Support</h6>
                <ul>
                    <li><Link to="/">Supporting walls</Link></li>
                    <li><Link to="/">Supporting ceiling</Link></li>
                    <li><Link to="/">Supporting lights</Link></li>
                    <li><Link to="/">Support columns</Link></li>
                </ul>
            </div>
        )
    }
};
export default SupportContainer;