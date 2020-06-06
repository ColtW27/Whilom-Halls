import React from 'react';
import { Link } from 'react-router-dom'

class CommunityContainer extends React.Component {
    render() {
        return (
            <div>
                <h6>Community</h6>
                <ul>
                    <li><Link to="/">Whilom Halls Magazine</Link></li>
                    <li><Link to="/">Whilom Halls Associates</Link></li>
                    <li><Link to="/">Whilom Halls for Work</Link></li>
                    <li><Link to="/">Invite friends</Link></li>
                    <li><Link to="/">Gifts</Link></li>
                    <li><Link to="/">Couriers</Link></li>
                </ul>
            </div>
        )
    }
};
export default CommunityContainer;