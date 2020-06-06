import React from 'react';
import { Link } from 'react-router-dom';
const FooterMessage = () => {
    return (
        <div
            className="footer-message-container">
            <div
              className="footer-message">
                <p>Whilom Halls is not a real business, but rather a portfolio piece.</p>
                <p>2020, Colton Wilmouth</p>
            {/* <Link to='/'
              className="footer-message-link">
              Learn more
            </Link> */}
            </div>
        </div>
    )
}

export default FooterMessage;