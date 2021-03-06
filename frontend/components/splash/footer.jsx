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
                      <li>Why Whimsy</li>
                      <li>Whimsy Basic</li>
                      <li>Whimsy Premium</li>
                      <li>Whimsy Business</li>
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
                      <li>Our Community</li>
                      <li>Certified Consultants</li>
                      <li>Developers</li>
                      <li>Events</li>
                      <li>Forum</li>
                    </ul>
                  </li>

                  <li>
                    <ul className="dud-lis">
                      <li><h6>SUPPORT</h6></li>
                      <li>Help & Learning</li>
                      <li>Troubleshooting</li>
                      <li>Blog</li>
                    </ul>
                  </li>

                  <li>
                    <ul className="dud-lis">
                      <li><h6>COMPANY</h6></li>
                      <li>About Us</li>
                      <li>Press</li>
                      <li>Careers</li>
                      <li>Inclusion & Diversity</li>
                      <li>Contact Us</li>
                    </ul>
                  </li>

                  <span className="session-links session-move"><Link className="splash-signup" to="/signup">Sign up</Link><span className="or">or</span><Link className="splash-login" to="/login">Log in</Link></span>
                </ul>
              </div>


              <div className= "break-divide">
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
            </div>
      )
    };
}

export default Footer;
