import React from 'react';
import { Link } from 'react-router-dom'

class AboutContainer extends React.Component {
    render() {
      return (
        <div>
            <h6>About</h6>
          <ul>
           <li><Link>Belonging & Diversity</Link></li>     
           <li><Link>Accessibility</Link></li>     
           <li><Link>Safety & Trust</Link></li>     
           <li><Link>Whilom Halls Citizen</Link></li>     
           <li><Link>Newsroom</Link></li>     
          </ul>
        </div>
      )
    }
}
export default AboutContainer;