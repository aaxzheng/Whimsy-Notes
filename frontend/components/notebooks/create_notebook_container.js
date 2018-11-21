import {closeModal} from '../../actions/notebook_modal_actions';
import CreateNotebookForm from './create_notebook';
import {connect} from 'react-redux';
import {fetchNotebook,createNotebook} from '../../actions/notebook_actions';

const msp = (state) => {
  return {
    user: state.entities.users[state.session.currentUserId],
  };
};



const mdp = (dispatch) => {
  return {
    fetchNotebook: (id) => dispatch(fetchNotebook(id)),
    createNotebook: (notebook) => dispatch(createNotebook(notebook)),
    closeModal: () => dispatch(closeModal()),
  }
}


export default connect(msp,mdp)(CreateNotebookForm);
