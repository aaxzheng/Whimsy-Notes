import SideBar from './sidebar';
import {connect} from 'react-redux';
import {logout} from '../../../actions/session_actions';
import {fetchNotes, fetchNote, fetchArray} from '../../../actions/note_actions';
import {fetchNotebooks, fetchNotebook} from '../../../actions/notebook_actions';
import {dropdownReveal} from '../../../util/app_util';

const msp = (state) => {
  return {
    notes:state.entities.notes.notes,
    notebooks: state.entities.notebooks.notebooks,
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
    fetchArray: (array,query) => dispatch(fetchArray(array,query)),
    dropdownReveal: dropdownReveal,
  };
};


export default connect(msp,mdp)(SideBar);
