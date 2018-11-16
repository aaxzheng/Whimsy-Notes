import React from 'react';

class SideBar extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
    // this.props.fetchNotebooks();
    this.props.fetchNotebook(3);
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}

export default SideBar;
