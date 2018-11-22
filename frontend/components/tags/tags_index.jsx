import React from 'react';
import {merge} from 'lodash';
import TagsIndexItem from './tags_index_item';

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);

  }


  componentWillMount() {
    this.props.fetchTags();
  }

  render () {
    const tags = this.props.tags.slice(0);
    let sorted = tags.sort((a,b) => a.tag.toLowerCase().localeCompare(b.tag.toLowerCase()));
    const lists = [];
    while (sorted.length > 0 ) {
      let compare = sorted[0].tag[0].toLowerCase();
      let category = [];
      category.push(sorted.shift());
      for (let i = 0; i < sorted.length; i++) {
        if(sorted[i].tag[0].toLowerCase() === compare) {
          category.push(sorted[i]);
          sorted.splice(i,1);
          i--;
        }
      }
      lists.push(category);
    }


    const indexItems = lists.map((tags,idx) => {return (
      <TagsIndexItem key={idx} tags={tags} deleteTag={this.props.deleteTag} fetchArray={this.props.fetchArray}/>
    )})

    return (
      <div className="notebook-index-div">
        <div className="notebook-index">
          <div className="nb-index-top">
            <div className="nb-index-top-word">Tags</div>
          </div>
          <hr className="nb-break"/>
          <div className="tags-index">
            {indexItems}
          </div>
        </div>
      </div>
    )
  }
}

export default TagsIndex;
