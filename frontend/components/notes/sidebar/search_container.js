import Search from './search';
import {connect} from 'react-redux';
import {fetchNotes, fetchNote, fetchArray} from '../../../actions/note_actions';
import {fetchNotebooks} from '../../../actions/notebook_actions';

const msp = (state) => {
  const notes = Object.values(state.entities.notes) || [];
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
    fetchArray: (obj,results,query) => dispatch(fetchArray(obj,results,query)),
  };
};


export default connect(msp,mdp)(Search);
