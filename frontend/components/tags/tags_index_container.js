import {connect} from 'react-redux';
import TagsIndex from './tags_index';
import {fetchTags,deleteTag,fetchTag,clearTag} from '../../actions/tag_actions';
import {fetchArray} from '../../actions/note_actions';

const msp = (state,oldProps) => {
  return {
    tags: Object.values(state.entities.tags),
  }
}

const mdp = (dispatch) => {
  return {
    fetchTags: () => dispatch(fetchTags()),
    deleteTag: (id) => dispatch(deleteTag(id)),
    fetchTag: (id) => dispatch(fetchTag(id)),
    fetchArray: (obj,results,query) => dispatch(fetchArray(obj,results,query)),
  }
}

export default connect(msp,mdp)(TagsIndex);
