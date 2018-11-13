
import {RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/session_actions';
const defaultState = { currentUserId: null };
import { merge } from 'lodash';

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUserId: action.user.id };
    case REMOVE_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};

export default sessionReducer;
