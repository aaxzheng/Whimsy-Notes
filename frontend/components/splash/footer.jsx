import React from 'react';
import { Link } from 'react-router-dom'

class Footer extends React.Component {
    render () {
      return (
          <div className="daFoot">
            <div className="foot-logo">
              <a href="/" className="lolgo">Whimsy Notes</a>
            </div>
            <hr className="first-break"/>
              <div className="session-div2">
                <span className="session-links session-move"><Link className="splash-signup" to="/signup">Sign up</Link><span className="or">or</span><Link className="splash-login" to="/login">Log in</Link></span>
              </div>
            <hr className="second-break" />
              <div className="copyright-div">
                <p className="copyright">2018 Whimsy Notes Corporation. All tights reserved.</p>
                <ul className="copyright-list">
                  <li>Security</li>
                  <li>Legal</li>
                  <li>Privacy</li>
                </ul>
              </div>
            </div>
      )
    };
}

export default Footer;
