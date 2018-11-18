import {connect} from 'react-redux';
import NotesIndex from './notes_index';
import {fetchNotes} from '../../../actions/note_actions';


const msp = (state,ownProps) => {
  console.log(state);
  return {
    notes: state.entities.notes.notes,
  }
}

const mdp = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
  }
}

export default connect(msp,mdp)(NotesIndex)
