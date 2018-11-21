import {connect} from 'react-redux';
import Editor from './editor';
import {fetchNote, updateNote,deleteNote,fetchNotes,createNote} from '../../../actions/note_actions';

const msp = (state,ownProps) => {
  let notebookId = null;
  if (state.entities.results.current) {
    notebookId = state.entities.results.current;
  }

  const note = state.entities.notes.note || {body:""}
  return {
    note: note,
    user: state.entities.users[state.session.currentUserId],
    currentNotebookId: notebookId,
  }
}

const mdp = dispatch => {
  return {
    fetchNote: (id) => dispatch(fetchNote(id)),
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (id) => dispatch(deleteNote(id)),
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (notebookId,note) => dispatch(createNote(notebookId,note)),
  }
}

export default connect(msp,mdp)(Editor)
