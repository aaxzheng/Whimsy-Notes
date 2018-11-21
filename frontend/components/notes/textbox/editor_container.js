import {connect} from 'react-redux';
import Editor from './editor';
import {fetchNote, updateNote,deleteNote,fetchNotes} from '../../../actions/note_actions';

const msp = (state,ownProps) => {
  const note = state.entities.notes.note || {body:""}
  return {
    note: note,
  }
}

const mdp = dispatch => {
  return {
    fetchNote: (id) => dispatch(fetchNote(id)),
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (id) => dispatch(deleteNote(id)),
    fetchNotes: () => dispatch(fetchNotes()),
  }
}

export default connect(msp,mdp)(Editor)
