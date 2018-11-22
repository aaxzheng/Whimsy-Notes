import {connect} from 'react-redux';
import TagsIndex from './tags_index';
import {fetchTags,deleteTag} from '../../actions/tag_actions';
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
    fetchArray: (array,query) => dispatch(fetchArray(array,query)),
  }
}

export default connect(msp,mdp)(TagsIndex);
