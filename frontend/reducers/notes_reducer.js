import {RECEIVE_NOTE, RECEIVE_NOTES, REMOVE_NOTE, RECEIVE_ARRAY, REMOVE_TRASH} from "../actions/note_actions";
import {REMOVE_TAG_NOTE} from "../actions/tag_actions";
import {merge} from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTE:
      return merge({},state,{[action.note.id]: action.note});
    case RECEIVE_NOTES:
      return merge({},state,action.notes);
    case REMOVE_NOTE:
      const newState = merge({},state);
      delete newState[action.noteId];
      return newState;
    case REMOVE_TRASH:
      const nuState = merge({},action.trash);
      return nuState;
    case REMOVE_TAG_NOTE:
    const muState = merge({},state);
    let arr = muState[action.id.noteId].tag_ids.filter(ele => ele != action.id.id);
    muState[action.id.noteId].tag_ids = arr;
    return muState;
    default:
      return state;
  }
};
