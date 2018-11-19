import React from 'react';
import {Link} from 'react-router-dom';

class NotesIndexItem extends React.Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  sendNote() {
    this.props.fetchNote(this.props.note.id);
  }

  render() {
    return (
      <Link onClick={this.sendNote.bind(this)} to="/test/index/editor" className="index-item">
        <div className="item-name">
          <p className="item-name-word">{this.props.note.title}</p>
        </div>

        <div className="item-body">
          {this.props.note.body}
        </div>

        <div className="item-date">
          Yesterday (test date)
        </div>
      </Link>
    )
  }
}


export default NotesIndexItem;
