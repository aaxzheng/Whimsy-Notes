import {connect} from 'react-redux';
import Editor from './editor';
import {fetchNote, updateNote,deleteNote,fetchNotes,createNote} from '../../../actions/note_actions';
import {createTag, deleteTagNote,fetchTag} from '../../../actions/tag_actions';
import {openModal} from '../../../actions/notebook_modal_actions';

const msp = (state,ownProps) => {
  let notebookId = null;
  if (state.entities.results.currentNb) {
    notebookId = state.entities.results.currentNb;
  }

  const note = state.entities.notes[state.entities.results.currentNote] || {body:""}
  let notebook = {title:"<Inbox>"};
  if (state.entities.results.currentNote) {
    notebook = state.entities.notebooks[note.notebook.id]
  }

  const tag = [];
  if (note.tag_ids) {
    for (let i = 0; i < note.tag_ids.length; i++) {
      tag.push(state.entities.tags[note.tag_ids[i]]);
    }
  }

  return {
    note: note,
    user: state.entities.users[state.session.currentUserId],
    currentNotebookId: notebookId,
    notebook: notebook,
    tag: tag,
  }
}

const mdp = dispatch => {
  return {
    fetchNote: (id) => dispatch(fetchNote(id)),
    updateNote: (note) => dispatch(updateNote(note)),
    deleteNote: (id) => dispatch(deleteNote(id)),
    fetchNotes: () => dispatch(fetchNotes()),
    createNote: (notebookId,note) => dispatch(createNote(notebookId,note)),
    createTag: (tag) => dispatch(createTag(tag)),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteTagNote: (id,noteId) => dispatch(deleteTagNote(id,noteId)),
    fetchTag: (id) => dispatch(fetchTag(id))
  }
}

export default connect(msp,mdp)(Editor)
