import React from 'react';
import {Link} from 'react-router-dom';
class TagObject extends React.Component {
  constructor(props) {
    super(props);
  }

  sendData(tag) {
    this.props.fetchTag(tag.id);
    // document.getElementById(`${this.props.tag.id}`).classList.toggle("show-tag-dropdown");
  }

  showDropdown() {
      setTimeout(()=>document.getElementById(`${this.props.tag.id}`).classList.toggle("show-tag-dropdown"),225);
  }

  removeNote(note) {
    this.props.deleteTagNote(this.props.tag.id,note.id);
    // document.getElementById(`${this.props.tag.id}`).classList.toggle("show-tag-dropdown");
  }

  fillArrow() {
    document.getElementById("fill-arrow").classList.toggle("white-fill");
  }

  render() {
    let tag = this.props.tag
    return (
      <>
      <div  onFocus={() => {this.fillArrow();this.showDropdown();}} onBlur={() => {this.fillArrow();this.showDropdown();}}  key={`${tag.id}`} className="edit-tag-body">
        <Link to={`/test/index/editor/`}  className="edit-body-tag-name">{tag.tag}</Link>
        <div className="tag-body-btn" >
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" ><path id="fill-arrow" className="edit-tag-arrow" fill="black" d="M7 2L4 5 1 2"></path></svg>
        </div>
      </div>
      <div key={`${tag.id}drop`} className="edit-tag-drop">
        <ul  id={`${tag.id}`} className="edit-tag-box">
          <li onClick={() => this.sendData(this.props.tag)}>Filter by Tag</li>
          <li onClick={() => this.removeNote(this.props.note)}>Remove</li>
        </ul>
      </div>
      </>
      )
    }
}

export default TagObject
