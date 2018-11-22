import React from 'react';
import {Link} from 'react-router-dom';
import {merge} from 'lodash';


class NotesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = merge({},this.props)
  }


  componentDidMount() {
  }

  componentDidUpdate(oldProps) {
    if (oldProps.note !== this.props.note) {
      this.setState(merge({},this.props));
    }
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
          Yesterday (not yet implemented)
        </div>
      </Link>
    )
  }
}


export default NotesIndexItem;
