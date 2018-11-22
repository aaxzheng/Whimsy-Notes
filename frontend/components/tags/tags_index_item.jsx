import React from 'react';

class TagsIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const letter = this.props.tags[0].tag[0].toUpperCase();
    const items = this.props.tags.map((tag,idx) => {
      debugger
      return (
      <li className="tag-item">
        <div className="tag-dropdown">
          {tag.tag}
          <span className="tag-item-num">({tag.tagged.length})</span>
          <div className="tag-dropdown-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" ><path className="tag-arrow" fill="black" d="M7 2L4 5 1 2"></path></svg>
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
