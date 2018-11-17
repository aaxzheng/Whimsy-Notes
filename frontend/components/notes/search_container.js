import Search from './sidebar';
import {connect} from 'react-redux';
import {fetchNotes, fetchNote} from '../../actions/note_actions';


const msp = (state) => {
  return {
    notes: state.notes,
    user: state.entities.users[state.session.currentUserId]
  };
};

const mdp = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (id) => dispatch(fetchNote(id)),
  };
};


export default connect(msp,mdp)(Search);
