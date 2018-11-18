import React from 'react';
import onClickOutside from 'react-onclickoutside';
import {Link} from 'react-router-dom';

class Dropdown extends React.Component {
  constructor (props) {
    super(props);
    this.user = this.props.user;
  }

  handleClickOutside (evt) {
    this.props.dropdownHide();
  };

  render () {
    return (
      <div id="dropdownBox" className="header-dropdown">
        <ul ref={this.setRef} className="dropdown-list">

          <li className="header-drop-li">
            <div id="header-drop-prof" className="account">Account</div>
            <div className="header-profile" id="header-drop-prof">
              <span className="header-icon"/>
              <span className="header-name li-name">{this.user.username}</span>
            </div>
          </li>

          <li>
            <ul className="header-duds">
              <li id="dropdownHover">Settings</li>
              <li id="dropdownHover">Help</li>
              <li id="dropdownHover">What's new in Whimsy</li>
              <li onClick={this.props.logout} id="dropdownHover"><Link id="header-dud-logout" to="/">Go back to splash</Link></li>
            </ul>
          </li>
        </ul>

          <div className="dropdown-logout">
            <div className="dropdown-logout-div" id="dropdownHover">
              <span className="clicky-out" onClick={this.props.logout}>Sign Out {this.user.username}</span>
            </div>
          </div>

      </div>

    )
  }
}

export default onClickOutside(Dropdown);
