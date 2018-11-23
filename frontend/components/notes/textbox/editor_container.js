import {connect} from 'react-redux';
import Editor from './editor';
import {fetchNote, updateNote,deleteNote,fetchNotes,createNote} from '../../../actions/note_actions';

const msp = (state,ownProps) => {
  let notebookId = null;
  if (state.entities.results.currentNb) {
    notebookId = state.entities.results.currentNb;
  }

  const note = state.entities.notes[state.entities.results.currentNote] || {body:""}
  let notebook = {title:"Inbox"};
  if (state.entities.results.currentNote) {
    notebook = state.entities.notebooks[note.notebook.id]
  }

  return {
    note: note,
    user: state.entities.users[state.session.currentUserId],
    currentNotebookId: notebookId,
    notebook: notebook,
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
