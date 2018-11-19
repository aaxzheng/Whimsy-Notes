import Search from './search';
import {connect} from 'react-redux';
import {fetchNotes, fetchNote, fetchArray} from '../../../actions/note_actions';
import {fetchNotebooks} from '../../../actions/notebook_actions';

const msp = (state) => {
  const notes = state.entities.notes.notes || [];
  return {
    notes: notes,
    user: state.entities.users[state.session.currentUserId],
  };
};

const mdp = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (id) => dispatch(fetchNote(id)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchArray: (results,query) => dispatch(fetchArray(results,query)),
  };
};


export default connect(msp,mdp)(Search);
