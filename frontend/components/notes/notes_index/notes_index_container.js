import {connect} from 'react-redux';
import NotesIndex from './notes_index';
import {fetchNotes, fetchNote, fetchArray, deleteTrash} from '../../../actions/note_actions';
import {clearTag} from '../../../actions/tag_actions';

const msp = (state,ownProps) => {
  let notes;
  let trash = false
  switch(state.entities.results.obj) {
    case "trash":
      notes = Object.values(state.entities.notes);
      trash = true;
      break;
    case "notebook":
      const notebook = state.entities.notebooks[state.entities.results.array];
      notes = notebook.note_ids.map(noteId => state.entities.notes[noteId]);
      break;
    case "search":
      notes = state.entities.results.array;
      break;
    default:
      notes = Object.values(state.entities.notes);
      break;
  }


  let tag = null;
  if (state.entities.results.currentTag && trash === false) {
    tag = state.entities.tags[state.entities.results.currentTag];
  }

  const query = state.entities.results.query || "All Notes";
  return {
    query: query,
    tag: tag,
    notes: notes,
    trash: trash,
  }
}

const mdp = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNote: (note) => dispatch(fetchNote(note)),
    fetchArray: (obj,array,query) => dispatch(fetchArray(obj,array,query)),
    deleteTrash: () => dispatch(deleteTrash()),
    clearTag: () => dispatch(clearTag()),
  }
}

export default connect(msp,mdp)(NotesIndex)
