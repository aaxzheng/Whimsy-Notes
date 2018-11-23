import {RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOKS, REMOVE_NOTEBOOK} from "../actions/notebook_actions";
import {RECEIVE_NOTE, REMOVE_NOTE} from "../actions/note_actions";
import {merge} from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_NOTEBOOK:
      return merge({},state,{[action.notebook.id]: action.notebook});
    case RECEIVE_NOTEBOOKS:
      return merge({},action.notebooks);
    case REMOVE_NOTEBOOK:
      newState = merge({},state);
      delete newState[action.notebookId];
      return newState;
    case RECEIVE_NOTE:
      newState =  merge({},state);
      if (!newState[action.note.notebook_id].note_ids.includes(action.note.id)) {
        newState[action.note.notebook_id].note_ids.push(action.note.id);
      }
      return newState;
    case REMOVE_NOTE:
      newState = merge({},state);
      let array = newState[action.note.notebook_id].note_ids;
      array.splice(array.findIndex(id => id === action.noteId), 1);
      return newState;
    default:
      return state;
  }
};
