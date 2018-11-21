import {openModal} from '../../actions/notebook_modal_actions';
import NotebookIndex from './notebook_index';
import {connect} from 'react-redux';
import {fetchNotebook,fetchNotebooks,createNotebook,deleteNotebook} from '../../actions/notebook_actions';
import {fetchArray} from '../../actions/note_actions';
const msp = (state,ownProps) => {
  return {
    notebooks: state.entities.notebooks.notebooks,
  }
}

const mdp = (dispatch) => {
  return {
    fetchNotebook: (id) => dispatch(fetchNotebook(id)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    deleteNotebook: (id) => dispatch(deleteNotebook(id)),
    fetchArray: (results,query) => dispatch(fetchArray(results,query)),
    openModal: (modal) => dispatch(openModal(modal)),
  }
}


export default connect(msp,mdp)(NotebookIndex);
