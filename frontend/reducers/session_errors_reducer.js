
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/session_actions';

export default (state=[], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    // case EMPTY_FIELDS:
    //   return ["This is a required field"]
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};
