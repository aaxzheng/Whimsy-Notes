import {connect} from 'react-redux';
import {closeModal} from '../../actions/notebook_modal_actions';
import NotebookModal from './notebook_modal';


const msp = state => {
  return {
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(NotebookModal);
