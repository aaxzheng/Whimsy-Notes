import {closeModal} from '../../actions/notebook_modal_actions';
import EditNotebookForm from './edit_notebook';
import {connect} from 'react-redux';
import {fetchNotebook,updateNotebook} from '../../actions/notebook_actions';

const msp = (state) => {
  return {
    user: state.entities.users[state.session.currentUserId],
    notebook: state.entities.notebooks[state.entities.results.current],
  };
};



const mdp = (dispatch) => {
  return {
    fetchNotebook: (id) => dispatch(fetchNotebook(id)),
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
    closeModal: () => dispatch(closeModal()),
  }
}


export default connect(msp,mdp)(EditNotebookForm);
