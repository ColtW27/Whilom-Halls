import React from 'react';
import { Link } from 'react-router-dom'

class AboutContainer extends React.Component {
    render() {
      return (
        <div className="individual-footer-component">
            <h6>About</h6>
          <ul >
           <li><Link to="/">Belonging & Diversity</Link></li>     
           <li><Link to="/">Accessibility</Link></li>     
           <li><Link to="/">Safety & Trust</Link></li>     
           <li><Link to="/">Whilom Halls Citizen</Link></li>     
           <li><Link to="/">Newsroom</Link></li>     
          </ul>
        </div>
      )
    }
};
export default AboutContainer;