import React from 'react';
import {Link} from 'react-router-dom';
import {merge} from 'lodash';


class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({},this.props)
    // debugger;
  }


  componentDidMount() {
  }

  componentDidUpdate(oldProps) {
    if (oldProps.note !== this.props.note) {
      this.setState(merge({},this.props));
    }
  }

  noteTime() {
    const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"]
    let old_update = new Date();
    let updated = new Date(this.props.note.updated_at);
    let last_update = Math.floor(((((old_update - updated) / 1000)/60)/60)/24); //days
    if (last_update < 1) {
      last_update = Math.floor(((((old_update - updated) / 1000))/60)/60); //hours
      if (last_update < 1) {
        last_update = Math.floor((((old_update - updated) / 1000))/60); //minutes
        if (last_update < 1) {
          last_update = "a few seconds ago";
        } else {
          return `${last_update} minutes ago`
        }
      } else {
        return `${last_update} hours ago`
      }
    }else if (last_update > 6) {
      return `${months[updated.getMonth()]} ${updated.getDate()}` // if longer than a week
    } else {
      return `${last_update} days ago`
    }
    return last_update;
  }

  sendNote() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(this.props.fetchNote(this.props.note.id),5000);
  }

  render() {
    const title = this.props.note.title || "Untitled";

    return (
      <Link onClick={this.sendNote.bind(this)} to="/test/index/editor" className="index-item">
        <div className="item-name">
          <p className="item-name-word">{title}</p>
        </div>

        <div className="item-body">
          {this.props.note.preview}
        </div>

        <div className="item-date">
          {this.noteTime()}
        </div>
      </Link>
    )
  }
}


export default NotesIndexItem;
