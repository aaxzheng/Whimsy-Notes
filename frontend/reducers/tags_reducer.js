import {RECEIVE_TAG, RECEIVE_TAGS, REMOVE_TAG, REMOVE_TAG_NOTE} from "../actions/tag_actions";
import {merge} from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TAG:
      return merge({},state,{[action.tag.id]: action.tag});
    case RECEIVE_TAGS:
      return merge({},action.tags);
    case REMOVE_TAG:
      const newState = merge({},state);
      delete newState[action.tagId];
      return newState;
    default:
      return state;
  }
};
