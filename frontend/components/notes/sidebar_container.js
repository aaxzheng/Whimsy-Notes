import SideBar from './sidebar';
import {connect} from 'react-redux';
import {fetchNotes} from '../../actions/note_actions';
import {fetchNotebooks, fetchNotebook} from '../../actions/notebook_actions';

const msp = (state) => {
  return {
    notes: state.notes,
  };
};

const mdp = (dispatch) => {
  return {
    fetchNotes: () => dispatch(fetchNotes()),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    fetchNotebook: (id) => dispatch(fetchNotebook(id))
  };
};


export default connect(msp,mdp)(SideBar);
