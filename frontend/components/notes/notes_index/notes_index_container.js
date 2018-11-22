import {connect} from 'react-redux';
import NotesIndex from './notes_index';
import {fetchNotes, fetchNote} from '../../../actions/note_actions';


const msp = (state,ownProps) => {
  let array = null;
  if (state.entities.results.array.length > 0) {
    array = state.entities.results.array;
  }

  const notes = array || Object.values(state.entities.notes);
  const query = state.entities.results.query || "All Notes";
  return {
    notes: notes,
    query: query,
  }
}

const mdp = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (note) => dispatch(fetchNote(note)),
  }
}

export default connect(msp,mdp)(NotesIndex)
