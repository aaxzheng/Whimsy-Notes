import React from 'react';
import {Link} from 'react-router-dom';
class TagObject extends React.Component {
  constructor(props) {
    super(props);
  }

  removeNote(note) {
    this.props.deleteTagNote(this.props.tag.id,note.id);
  }

  render() {
    let tag = this.props.tag
    return (
      <>
      <div onClick={() => this.removeNote(this.props.note)} key={`${tag.id}`} className="edit-tag-body">
        <Link to={`/test/index/editor/`}  className="edit-body-tag-name">{tag.tag}</Link>
        <div className="tag-body-btn" >
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" ><path className="edit-tag-arrow" fill="black" d="M7 2L4 5 1 2"></path></svg>
        </div>
      </div>
      <div key={`${tag.id}drop`} className="edit-tag-drop">
        <ul>
          <li>Remove</li>
        </ul>
      </div>
      </>
      )
    }
}

export default TagObject
