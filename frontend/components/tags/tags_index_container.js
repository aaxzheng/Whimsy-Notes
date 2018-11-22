import {connect} from 'react-redux';
import TagsIndex from './tags_index';
import {fetchTags} from '../../actions/tag_actions';

const msp = (state,oldProps) => {
  return {
    tags: Object.values(state.entities.tags),
  }
}

const mdp = (dispatch) => {
  return {
    fetchTags: () => dispatch(fetchTags()),
  }
}

export default connect(msp,mdp)(TagsIndex);
