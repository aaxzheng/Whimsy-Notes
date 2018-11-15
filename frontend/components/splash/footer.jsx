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
                <ul className="footer-ul">

                  <li>
                    <ul className="dud-lis">
                      <li><h6>PRODUCT</h6></li>
                      <li>Why Whimsy Notes</li>
                      <li>Whimsy Notes Basic</li>
                      <li>Whimsy Notes Premium</li>
                      <li>Whimsy Notes Business</li>
                      <li>Compare Plans</li>
                      <li>Student Discount</li>
                      <li>Download App</li>
                    </ul>
                  </li>

                  <li>
                    <ul className="dud-lis">
                      <li><h6>FEATURES</h6></li>
                      <li>Web Clipper</li>
                      <li>Templates</li>
                      <li>Spaces</li>
                      <li>Integrations</li>
                      <li>Notes Sync</li>
                      <li>PDF & Doc Search</li>
                      <li>Search Handwriting</li>
                      <li>Document Scanning</li>
                      <li>Notebooks & Tags</li>
                    </ul>
                  </li>

                  <li>
                    <ul className="dud-lis">
                      <li><h6>COMMUNITY</h6></li>
                      <li>Why Whimsy Notes</li>
                      <li>Whimsy Notes Basic</li>
                      <li>Whimsy Notes Premium</li>
                      <li>Whimsy Notes Business</li>
                      <li>Compare Plans</li>
                      <li>Student Discount</li>
                      <li>Download App</li>
                    </ul>
                  </li>

                  <li>
                    <ul className="dud-lis">
                      <li><h6>SUPPORT</h6></li>
                      <li>Why Whimsy Notes</li>
                      <li>Whimsy Notes Basic</li>
                      <li>Whimsy Notes Premium</li>
                      <li>Whimsy Notes Business</li>
                      <li>Compare Plans</li>
                      <li>Student Discount</li>
                      <li>Download App</li>
                    </ul>
                  </li>

                  <li>
                    <ul className="dud-lis">
                      <li><h6>COMPANY</h6></li>
                      <li>Why Whimsy Notes</li>
                      <li>Whimsy Notes Basic</li>
                      <li>Whimsy Notes Premium</li>
                      <li>Whimsy Notes Business</li>
                      <li>Compare Plans</li>
                      <li>Student Discount</li>
                      <li>Download App</li>
                    </ul>
                  </li>

                </ul>
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
