import {RECEIVE_NOTE, RECEIVE_NOTES, REMOVE_NOTE} from "../actions/note_actions";
import {merge} from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTE:
      return merge({},state,{[action.note.id]: action.note});
    case RECEIVE_NOTES:
      return merge({},action.notes);
    case REMOVE_NOTE:
      const newState = merge({},state);
      delete newState[action.noteId];
      return newState;
    default:
      return state;
  }
};
