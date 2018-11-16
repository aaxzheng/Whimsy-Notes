import React from 'react';
import { Link } from 'react-router-dom';


class SideBar extends React.Component {
  constructor (props) {
    super(props);
    this.user = this.props.user;
  }


  componentDidMount() {
    // this.props.fetchNote(13);
    // this.props.fetchNotebooks();
    // this.props.fetchNotebook(3);
  }

  render() {
    return (
      <>
      <div className="sidebar-body">
        <section className="sidebar-header">
          <div>
            <span className="header-username">{this.user.username}</span>
          </div>
        </section>
      </div>
      </>
    )
  }
}

export default SideBar;
