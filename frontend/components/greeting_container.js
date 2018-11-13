import Greeting from './greeting';
import {logout} from '../actions/session_actions';
import {connect} from 'react-redux';

const msp = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUserId),
    currentUser: state.entities.users[state.session.currentUserId]
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(msp,mdp)(Greeting);
