import React from 'react';
import {Link} from 'react-router-dom';

class NotesIndexItem extends React.Component {

  render() {
    return (
      <div className="index-item">
        <div className="item-name">
          <p className="item-name-word">{this.props.note.title}</p>
        </div>

        <div className="item-body">
          {this.props.note.body}
        </div>

        <div className="item-date">
          Yesterday (test date)
        </div>
      </div>
    )
  }
}


export default NotesIndexItem;
