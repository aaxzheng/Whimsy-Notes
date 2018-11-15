import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (
        <header className="navbar">

          <div className="navbar-right">
            <div className="navbar-logo">
              <a href="/" className="lolgo">Whimsy Notes</a>
            </div>

            <ul className="navi-duds">
              <li>PLANS</li>
              <li>FEATURES</li>
              <li>HELP & LEARNING</li>
              <li>ABOUT US</li>
            </ul>
          </div>

          <span className="session-links"><Link className="splash-signup" to="/signup">Sign up</Link><span className="or">or</span><Link className="splash-login" to="/login">Log in</Link></span>

        </header>
      );
    }
};

export default NavBar;
