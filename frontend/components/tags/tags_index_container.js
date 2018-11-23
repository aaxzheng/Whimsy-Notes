import {connect} from 'react-redux';
import TagsIndex from './tags_index';
import {fetchTags,deleteTag,fetchTag} from '../../actions/tag_actions';

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
  }
}

export default connect(msp,mdp)(TagsIndex);
