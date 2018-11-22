import SideBar from './sidebar';
import {connect} from 'react-redux';
import {logout} from '../../../actions/session_actions';
import {fetchNotes, fetchNote, fetchArray, createNote} from '../../../actions/note_actions';
import {fetchNotebooks, fetchNotebook} from '../../../actions/notebook_actions';
import {fetchTags} from '../../../actions/tag_actions';
import {dropdownReveal} from '../../../util/app_util';

const msp = (state) => {
    let notebookId = null;
    if (state.entities.results.currentNb) {
      notebookId = state.entities.results.currentNb;
    }
  return {
    notes: Object.values(state.entities.notes),
    notebooks: Object.values(state.entities.notebooks),
    user: state.entities.users[state.session.currentUserId],
    currentNotebookId: notebookId,
  };
};

const mdp = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotebook: (id) => dispatch(fetchNotebook(id)),
    fetchNote: (id) => dispatch(fetchNote(id)),
    logout: () => dispatch(logout()),
    createNote: (notebookId,note) => dispatch(createNote(notebookId,note)),
    fetchArray: (array,query) => dispatch(fetchArray(array,query)),
    fetchTags: () => dispatch(fetchTags()),
    dropdownReveal: dropdownReveal,
  };
};


export default connect(msp,mdp)(SideBar);
