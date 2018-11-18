import Dropdown from './dropdown';
import {connect} from 'react-redux';
import {logout} from '../../../actions/session_actions';
import {fetchNotes, fetchNote} from '../../../actions/note_actions';
import {fetchNotebooks, fetchNotebook} from '../../../actions/notebook_actions';
import {dropdownReveal, dropdownHide} from '../../../util/app_util';

const msp = (state) => {
  return {
    notes: state.notes,
    user: state.entities.users[state.session.currentUserId]
  };
};

const mdp = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotebook: (id) => dispatch(fetchNotebook(id)),
    fetchNote: (id) => dispatch(fetchNote(id)),
    logout: () => dispatch(logout()),
    dropdownHide: dropdownHide,
  };
};


export default connect(msp,mdp)(Dropdown);
