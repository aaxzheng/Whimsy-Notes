import {connect} from 'react-redux';
import {closeModal} from "../../../actions/notebook_modal_actions";
import MoveNoteModal from "./move_modal";
import {updateNote} from "../../../actions/note_actions";


const msp = (state) => {
  return {
    note: state.entities.notes[state.entities.results.currentNote],
    notebooks: Object.values(state.entities.notebooks),
  }
}

const mdp = (dispatch) => {
  return {
      closeModal: () => dispatch(closeModal()),
      updateNote: (note) => dispatch(updateNote(note)),
  }
}


export default connect(msp,mdp)(MoveNoteModal);
