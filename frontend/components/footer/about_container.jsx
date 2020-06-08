import React from 'react';
import { Link } from 'react-router-dom'

class AboutContainer extends React.Component {
    render() {
      return (
        <div className="individual-footer-component">
            <h6>About</h6>
          <ul > 
            <li><a href="https://github.com/ColtW27" target="_blank">My Github</a></li>  
            <li><a href="https://github.com/ColtW27/Whilom-Halls.git" target="_blank">Whilom Halls Repo.</a></li>  
            <li><a href="https://www.linkedin.com/in/colton-wilmouth-80b507132/" target="_blank">Linked In</a></li>      
           {/* <li><Link to="/">Whilom Halls Citizen</Link></li>      */}
           {/* <li><Link to="/">Newsroom</Link></li>      */}
          </ul>
        </div>
      )
    }
};
export default AboutContainer;