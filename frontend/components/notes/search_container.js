import Search from './search';
import {connect} from 'react-redux';
import {fetchNotes, fetchNote} from '../../actions/note_actions';
import {fetchNotebooks} from '../../actions/notebook_actions';

const msp = (state) => {
  const titles = state.entities.notes.titles || [];
  console.log(state);
  return {
    notes: state.entities.notes.notes,
    user: state.entities.users[state.session.currentUserId],
  };
};

const mdp = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (id) => dispatch(fetchNote(id)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
  };
};


export default connect(msp,mdp)(Search);
