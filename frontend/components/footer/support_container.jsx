import React from 'react';
import { Link } from 'react-router-dom'

class SupportContainer extends React.Component {
    render() {
        return (
            <div className="individual-footer-component">
                <h6>Support</h6>
                <ul>
                    <li><a href="https://www.google.com/search?q=old+wall+supports&sxsrf=ALeKk01zbruCpN2RGxdny1dFu4sbxuKIkw:1591629294109&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiF1MGVwfLpAhVwlHIEHVZ7DOcQ_AUoAXoECA0QAw&biw=1440&bih=789">Supporting walls</a></li>
                    <li><Link to="/">Supporting ceiling</Link></li>
                    <li><Link to="/">Supporting lights</Link></li>
                    <li><Link to="/">Support columns</Link></li>
                </ul>
            </div>
        )
    }
};
export default SupportContainer;