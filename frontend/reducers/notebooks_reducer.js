import {RECEIVE_NOTEBOOK, RECEIVE_NOTEBOOKS, REMOVE_NOTEBOOK} from "../actions/notebook_actions";
import {merge} from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTEBOOK:
      return merge({},state,{[action.notebook.id]: action.notebook});
    case RECEIVE_NOTEBOOKS:
      return merge({},action.notebooks);
    case REMOVE_NOTEBOOK:
      const newState = merge({},state);
      delete newState[action.notebookId];
      return newState;
    default:
      return state;
  }
};
