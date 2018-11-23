import React from 'react';
import {Link} from 'react-router-dom';

class TagsIndexItem extends React.Component {
  constructor(props) {
    super(props);
    
  }

  dropdownHide() {
    let obj = document.getElementsByClassName("show-tag-dropdown")[0];
    if (obj) {
      setTimeout(() => obj.classList.toggle("show-tag-dropdown"),300);
    }
  }

  dropdownReveal(id) {
    return (e) => {
       document.getElementById(`${id}`).classList.toggle("show-tag-dropdown");
    }
  }

  sendData(tag) {
    this.props.fetchTag(tag.id);
  }

  removeTag(id) {
    this.props.deleteTag(id);
  }

  render() {
    const letter = this.props.tags[0].tag[0].toUpperCase();
    const items = this.props.tags.map((tag,idx) => {
      return (
      <li className="tag-item">
        <div className="tag-body">
          <Link to="/test/index" onClick={() => this.sendData(tag)} className="body-tag-name">{tag.tag}</Link>
          <span className="tag-item-num">({tag.notes.length})</span>
          <div onFocus={this.dropdownReveal(tag.id)} tabIndex="0" onBlur={this.dropdownHide} className="tag-body-btn" >
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" ><path className="tag-arrow" fill="black" d="M7 2L4 5 1 2"></path></svg>
          </div>
        </div>
        <div onClick={(e) => e.stopPropagation()} className="tag-drop-div">
          <div id={tag.id}  className="tag-dropdown">
            <p onClick={() => this.removeTag(tag.id)} className="tag-dropdown-span">Delete tag...</p>
          </div>
        </div>
      </li>
  )});

    return (
      <div className="tags-index-item-div">
        <div className="category-letter">{letter}</div>
        <ul className="tags-ul">
          {items}
        </ul>
      </div>
    )
  }
}


export default TagsIndexItem
