import {RECEIVE_ARRAY} from '../actions/note_actions';
import {RECEIVE_NOTEBOOK} from '../actions/notebook_actions';
import {merge} from 'lodash';

export default (state = {array: []}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ARRAY:
      return merge([],{array: action.array, query: action.query});
    case RECEIVE_NOTEBOOK:
      return merge([],state,{ current: action.notebook.id });
    default:
    return state;
  }
};
