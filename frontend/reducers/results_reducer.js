import {RECEIVE_ARRAY} from '../actions/note_actions';
import {RECEIVE_NOTEBOOK} from '../actions/notebook_actions';
import {RECEIVE_NOTE} from '../actions/note_actions';
import {RECEIVE_TAG, CLEAR_TAG} from '../actions/tag_actions';
import {merge} from 'lodash';

export default (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARRAY:
      return merge([],state,{obj: action.obj, array: action.array, query: action.query});
    case RECEIVE_NOTEBOOK:
      return merge([],state,{ currentNb: action.notebook.id });
    case RECEIVE_NOTE:
      return merge([],state,{ currentNote: action.note.id });
    case RECEIVE_TAG:
      return merge([],state,{ currentTag: action.tag.id });
    case CLEAR_TAG:
      return merge([],state,{ currentTag: null});
    default:
    return state;
  }
};
