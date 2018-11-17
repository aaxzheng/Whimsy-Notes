import React from 'react';
import { Link } from 'react-router-dom';
import DropdownContainer from './dropdown_container'

class SideBar extends React.Component {
  constructor (props) {
    super(props);
    this.user = this.props.user;
    this.setRef = this.setRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
     document.addEventListener('mousedown', this.handleClickOutside);
   }

  componentWillUnmount() {
     document.removeEventListener('mousedown', this.handleClickOutside);
   }

   setRef(node) {
     this.node = node;
   }

   handleClickOutside(event) {
     if (this.node && !this.node.contains(event.target)) {
       this.props.dropdownReveal();
     }
   }

  componentDidMount() {
    // this.props.fetchNote(13);
    this.props.fetchNotebooks();
    // this.props.fetchNotebook(3);
  }

  render() {
    return (
      <>
      <div className="sidebar-body">
        <section className="sidebar-header">
          <div onClick={this.props.dropdownReveal} className="header-profile">
            <DropdownContainer />
            <span className="header-icon"/>
            <div className="header-right">
            <span className="header-name">{this.user.username}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="header-svg"><path fill="none" d="M7 2L4 5 1 2"></path></svg>
            </div>
          </div>
        </section>
      </div>
      </>
    )
  }
}

export default SideBar;
